import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { routes } from './app.routes';
import { cocktailsReducer } from './store/cocktails/cocktails.reducer';
import { CocktailsEffects } from './store/cocktails/cocktails.effects';

/**
 * Application Configuration
 * Following Dependency Inversion Principle - configuration is centralized
 */
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([])
    ),
    provideAnimations(),

    // NgRx Store Configuration
    provideStore({
      cocktails: cocktailsReducer
    }),

    // NgRx Effects
    provideEffects([CocktailsEffects]),

    // NgRx DevTools (only in development)
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
      connectInZone: true
    })
  ]
};
