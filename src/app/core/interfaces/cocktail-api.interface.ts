import { Observable } from 'rxjs';
import { Cocktail } from '../../models/cocktail.model';

/**
 * Interface for Cocktail API operations
 * Following Interface Segregation Principle (SOLID)
 */
export interface ICocktailApi {
  getCocktailsByFirstLetter(letter: string): Observable<Cocktail[]>;
  getCocktailById(id: string): Observable<Cocktail | null>;
  getRandomCocktail(): Observable<Cocktail | null>;
  getCocktailsByCategory(category: string): Observable<Cocktail[]>;
}
