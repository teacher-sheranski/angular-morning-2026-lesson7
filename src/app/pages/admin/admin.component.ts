import { JsonPipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  imports: [JsonPipe, UpperCasePipe],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent {
  obj = { name: 'sss' }
}
