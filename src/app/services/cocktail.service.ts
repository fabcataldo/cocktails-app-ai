import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError, timer } from 'rxjs';
import { map, catchError, retry, timeout } from 'rxjs/operators';
import { CocktailApiResponse, Cocktail } from '../models/cocktail.model';
import { ICocktailApi } from '../core/interfaces/cocktail-api.interface';
import { API_CONFIG, HTTP_CONFIG } from '../core/constants/api.constants';

/**
 * Cocktail Service implementing ICocktailApi
 * Following Single Responsibility Principle - handles only API communication
 * Following Dependency Inversion Principle - depends on abstraction (ICocktailApi)
 */
@Injectable({
  providedIn: 'root'
})
export class CocktailService implements ICocktailApi {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = API_CONFIG.BASE_URL;

  /**
   * Get cocktails filtered by first letter
   * @param letter - First letter of cocktail name (A-Z)
   * @returns Observable of Cocktail array
   */
  getCocktailsByFirstLetter(letter: string): Observable<Cocktail[]> {
    if (!this.isValidLetter(letter)) {
      return throwError(() => new Error('Invalid letter parameter. Must be A-Z.'));
    }

    const params = new HttpParams()
      .set(API_CONFIG.PARAMS.FIRST_LETTER, letter.toUpperCase());

    return this.http
      .get<CocktailApiResponse>(`${this.baseUrl}${API_CONFIG.ENDPOINTS.SEARCH_BY_LETTER}`, { params })
      .pipe(
        timeout(HTTP_CONFIG.TIMEOUT),
        retry({
          count: HTTP_CONFIG.RETRY_ATTEMPTS,
          delay: (error, retryCount) => {
            if (error instanceof HttpErrorResponse && error.status >= 500) {
              return timer(HTTP_CONFIG.RETRY_DELAY * retryCount);
            }
            return throwError(() => error);
          }
        }),
        map(response => response.drinks || []),
        catchError(this.handleError)
      );
  }

  /**
   * Get cocktail by ID
   * @param id - Cocktail ID
   * @returns Observable of Cocktail or null
   */
  getCocktailById(id: string): Observable<Cocktail | null> {
    const params = new HttpParams().set(API_CONFIG.PARAMS.ID, id);

    return this.http
      .get<CocktailApiResponse>(`${this.baseUrl}${API_CONFIG.ENDPOINTS.LOOKUP_BY_ID}`, { params })
      .pipe(
        timeout(HTTP_CONFIG.TIMEOUT),
        map(response => response.drinks?.[0] || null),
        catchError(this.handleError)
      );
  }

  /**
   * Get random cocktail
   * @returns Observable of random Cocktail or null
   */
  getRandomCocktail(): Observable<Cocktail | null> {
    return this.http
      .get<CocktailApiResponse>(`${this.baseUrl}${API_CONFIG.ENDPOINTS.RANDOM}`)
      .pipe(
        timeout(HTTP_CONFIG.TIMEOUT),
        map(response => response.drinks?.[0] || null),
        catchError(this.handleError)
      );
  }

  /**
   * Get cocktails by category
   * @param category - Cocktail category
   * @returns Observable of Cocktail array
   */
  getCocktailsByCategory(category: string): Observable<Cocktail[]> {
    const params = new HttpParams().set(API_CONFIG.PARAMS.CATEGORY, category);

    return this.http
      .get<CocktailApiResponse>(`${this.baseUrl}${API_CONFIG.ENDPOINTS.FILTER_BY_CATEGORY}`, { params })
      .pipe(
        timeout(HTTP_CONFIG.TIMEOUT),
        map(response => response.drinks || []),
        catchError(this.handleError)
      );
  }

  /**
   * Validate letter parameter
   * @param letter - Letter to validate
   * @returns boolean indicating if letter is valid
   */
  private isValidLetter(letter: string): boolean {
    return /^[A-Za-z]$/.test(letter);
  }

  /**
   * Handle HTTP errors
   * @param error - HTTP error response
   * @returns Observable throwing formatted error
   */
  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An unknown error occurred';

    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Client Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Server Error (${error.status}): ${error.message}`;
    }

    console.error('CocktailService Error:', errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
