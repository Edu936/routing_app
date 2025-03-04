import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  private _router: ActivatedRoute = inject(ActivatedRoute);
  public valor = 0;

  ngOnInit(): void {
    this.valor = parseInt(this._router.snapshot.params['id'],10);
    console.log(this.valor)
  }
}
