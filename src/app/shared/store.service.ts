import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  isLoggedIn = false;

  products: Product[] = [
    { id: crypto.randomUUID(), name: 'bread', price: 5 },
    { id: crypto.randomUUID(), name: 'milk', price: 7 },
    { id: crypto.randomUUID(), name: 'cheese', price: 6 },
  ];
}
