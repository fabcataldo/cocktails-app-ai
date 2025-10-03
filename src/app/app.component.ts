import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CocktailFilterComponent } from './components/cocktail-filter/cocktail-filter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CocktailFilterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cocktails-app';
}
