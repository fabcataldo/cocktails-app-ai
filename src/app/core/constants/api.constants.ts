/**
 * API Configuration Constants
 * Following Single Responsibility Principle
 */
export const API_CONFIG = {
  BASE_URL: 'https://www.thecocktaildb.com/api/json/v1/1',
  ENDPOINTS: {
    SEARCH_BY_LETTER: '/search.php',
    LOOKUP_BY_ID: '/lookup.php',
    RANDOM: '/random.php',
    FILTER_BY_CATEGORY: '/filter.php'
  },
  PARAMS: {
    FIRST_LETTER: 'f',
    ID: 'i',
    CATEGORY: 'c'
  }
} as const;

export const HTTP_CONFIG = {
  TIMEOUT: 30000,
  RETRY_ATTEMPTS: 3,
  RETRY_DELAY: 1000
} as const;
