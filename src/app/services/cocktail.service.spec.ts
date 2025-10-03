import { TestBed } from '@angular/core/testing';
import { CocktailService } from './cocktail.service';

describe('CocktailService', () => {
  let service: CocktailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CocktailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('HU-01: Filter by first letter', () => {
    it('should fetch cocktails by first letter from API', () => {
      // TODO: Implement test
    });

    it('should return empty array when no cocktails found', () => {
      // TODO: Implement test
    });

    it('should handle API errors gracefully', () => {
      // TODO: Implement test
    });
  });
});
