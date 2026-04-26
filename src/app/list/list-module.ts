import { NgModule } from '@angular/core';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [],
  // קומפוננטות ששייכות למודול
  imports: [DetailsComponent],
  // הקומפוננטות שהמודול מייצא
  exports: [DetailsComponent]
})
export class ListModule {}
