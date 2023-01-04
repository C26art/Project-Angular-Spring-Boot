import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first } from 'rxjs';

import { Product } from '../products/model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly API = '/api/products';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Product[]>(this.API)
      .pipe(
        first(),
        delay(1000)
      );
  }

  loadByID(id: string) {
    return this.httpClient.get<Product>(`${this.API}/${id}`).pipe(first());
  }

  create(product: string) {
    return this.httpClient.post(this.API, product).pipe(first());
  }

  update(product: any) {
    return this.httpClient.put(`${this.API}/${product.id}`, product).pipe(first());
  }

  save(product: any) {
    if(product.id) {
      return this.update(product);
    }
    return this.create(product);
  }

  remove(id: any) {
    return this.httpClient.delete(`${this.API}/${id}`).pipe(first());
  }

}
