import { Component, inject } from '@angular/core';
import { RouterModule } from "@angular/router";
import { StoreService } from '../../shared/store.service';

@Component({
  selector: 'app-list',
  imports: [RouterModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  storeService = inject(StoreService);
}
