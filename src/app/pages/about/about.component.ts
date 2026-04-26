import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  // סרוויס שמאפשר ניווט דרך הקוד
  // היתרון - ניתן לבדוק תנאים ולנתב בצורה דינאמית
  private _router = inject(Router);

  goHome() {
    // TODO: go to '/'
    this._router.navigateByUrl('/');

    // ניתן לכתוב מערך של ניתובים ויבצע שרשור
    // this._router.navigate(['/']);
  }
}
