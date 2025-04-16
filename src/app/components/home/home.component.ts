import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  name = 'teste';
  private readonly _router = inject(Router);
  teste() {
    this._router.navigate(['person', {name}]);
  }
}
