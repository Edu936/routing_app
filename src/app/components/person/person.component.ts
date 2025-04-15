import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  imports: [],
  templateUrl: './person.component.html',
  styleUrl: './person.component.scss'
})
export class PersonComponent {
  public name: string|null = null;
  
  @Input()
  set personId(name: string) {
    this.name = name;
  }
}
