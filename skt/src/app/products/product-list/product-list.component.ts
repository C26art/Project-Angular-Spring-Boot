import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Observable, of, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ProductService } from 'src/app/services/product.service';
import { AlertModalService } from 'src/app/shared/alert-modal.service';

import { Product } from '../model/product';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  preserveWhitespaces: true,
})
export class ProductListComponent implements OnInit{

  products$!: Observable<Product[]>;
  error$ =  new Subject<boolean>();
  deleteModalRef!: BsModalRef;  
  @ViewChild('deleteModal') deleteModal: any;
  productSelected!: Product;

  constructor(private productService: ProductService,             
             private alertService: AlertModalService,
             private router: Router,
             private route: ActivatedRoute,
             private modalService: BsModalService) {}

  ngOnInit(): void {    
    this.onRefresh();
  }

  onRefresh() {
    this.products$ = this.productService.list()
    .pipe(
      catchError(error => {
        console.error(error);        
        this.handleError();
        return of();
      })
    );
  }

  handleError() {
    this.alertService.showAlertDanger('Error loading list. Try again!');   
  }

  onEdit(id: any) {
    this.router.navigate(['edit', id], {relativeTo: this.route});

  }

  onDelete(product: any) {
    this.productSelected = product;
    this.deleteModalRef = this.modalService.show(this.deleteModal, {class: 'modal-sm'});
  }

  onConfirmDelete() {
    this.productService.remove(this.productSelected.id)
    .subscribe({
      next: (success) => {
        this.onRefresh();
        this.deleteModalRef.hide();
      },
      error: (error) => {
        this.alertService.showAlertDanger('Error remove product. Try again!');
        this.deleteModalRef.hide();
      }
    });
  }

  onDeclineDelete() {
    this.deleteModalRef.hide();
  }

}
