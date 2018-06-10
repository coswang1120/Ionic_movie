import { Component } from '@angular/core';

/**
 * Generated class for the MovieitemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'movieitem',
  templateUrl: 'movieitem.html'
})
export class MovieitemComponent {

  text: string;

  constructor() {
    console.log('Hello MovieitemComponent Component');
    this.text = 'Hello World';
  }

}
