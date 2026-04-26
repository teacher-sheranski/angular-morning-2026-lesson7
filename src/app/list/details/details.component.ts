import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {
  private _activatedRoute = inject(ActivatedRoute);

  constructor() {
    // פרמטרים שהם חובה - URL-נרשם לקבלת הערך שב
    // כל שינוי של הפרמטר נכנס לכאן שוב
    this._activatedRoute.params.subscribe(pr => {
      console.log(pr['id']);
    });

    // אם נרצה לקבל פרמטרים שהם רשות
    this._activatedRoute.queryParams.subscribe(sp => {
      console.log(sp);    
    })
  }
}
