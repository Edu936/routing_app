import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  //injetado a dependecia do serviço ActivadedRoute
  private _router: ActivatedRoute = inject(ActivatedRoute);
  //criado um atributo para essa pagina 
  public valor = 0;
  ngOnInit(): void {
    //capturando o valor presente na url
    this.valor = parseInt(this._router.snapshot.params['id'],10);
    //exibindo o valor no terminal  
    console.log(this.valor)
  }
}
