import { NgModule } from '@angular/core';
import { MovieitemComponent } from './movieitem/movieitem';
import { RatingComponent } from './rating/rating';
@NgModule({
	declarations: [MovieitemComponent,
    RatingComponent],
	imports: [],
	exports: [MovieitemComponent,
    RatingComponent]
})
export class ComponentsModule {}
