import { Component, inject, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  public id : string|null = null;
  private _router: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.id = this._router.snapshot.params['id']
  }
}
