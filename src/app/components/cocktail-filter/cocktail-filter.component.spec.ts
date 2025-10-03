import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CocktailFilterComponent } from './cocktail-filter.component';

describe('CocktailFilterComponent', () => {
  let component: CocktailFilterComponent;
  let fixture: ComponentFixture<CocktailFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CocktailFilterComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CocktailFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('HU-01: Filter by first letter', () => {
    it('should display filter buttons for all letters A-Z', () => {
      // TODO: Implement test
    });

    it('should filter cocktails when a letter is selected', () => {
      // TODO: Implement test
    });

    it('should display "No se encontraron resultados" when no cocktails match the selected letter', () => {
      // TODO: Implement test
    });

    it('should update the table with filtered results', () => {
      // TODO: Implement test
    });
  });
});
