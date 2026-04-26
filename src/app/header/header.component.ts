import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreService } from '../shared/store.service';

@Component({
  selector: 'app-header',
  // RouterModule - יש כאן את כל הקומפוננטות והתכונות של ניתובים
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public ser = inject(StoreService);
}
