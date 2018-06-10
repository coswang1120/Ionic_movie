import { Component } from '@angular/core';

/**
 * Generated class for the RatingComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'rating',
  templateUrl: 'rating.html'
})
export class RatingComponent {

  text: string;

  constructor() {
    console.log('Hello RatingComponent Component');
    this.text = 'Hello World';
  }

}
