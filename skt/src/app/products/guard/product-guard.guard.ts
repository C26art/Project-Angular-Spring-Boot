import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { ProductService } from '../../services/product.service';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductGuardGuard implements Resolve<Product> {

  constructor(private productService: ProductService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Product | Observable<Product> | Promise<Product> | Observable<any> {
    if (route.params && route.params['id']) {
      return this.productService.loadByID(route.params['id']);
    }

    return of({
      id: null,
      nome: null,
      amountPurchase: null,
      amountSold: null,
      stock: null,
      purchasePrice: null,
      percentage:null,
      saleValue: null,
      supplier: null,
      cnpj:null,
      phone:null,
    });
  }
}
