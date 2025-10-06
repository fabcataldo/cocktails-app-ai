import { Component } from '@angular/core';
import { CocktailFilterComponent } from './components/cocktail-filter/cocktail-filter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CocktailFilterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cocktails-app';
}
