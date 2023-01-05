import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { ProductService } from '../../services/product.service';
import { AlertModalService } from '../../shared/alert-modal.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit{
  productForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private productService: ProductService, private modal: AlertModalService, private location: Location, private route: ActivatedRoute) {}

  ngOnInit(): void {

    const product = this.route.snapshot.data['product'];

    this.productForm = this.formBuilder.group({
      id: [product.id],
      name: [product.name, [Validators.required, Validators.minLength(3), Validators.maxLength(200)]],
      amountPurchase: [product.amountPurchase,[Validators.required,Validators.pattern(/[0-9]/)]],
      amountSold: [product.amountSold,[Validators.required]],
      stock: [product.stock,[Validators.required]],
      purchasePrice: [product.purchasePrice,[Validators.required]],
      percentage: [product.percentage,[Validators.required]],
      saleValue: [product.saleValue,[Validators.required]],
      phone: [product.phone,[Validators.required,Validators.pattern(/(\(?\d{2}\)?\s)?(\d{4,5}\-?\d{4})$/)]],
      supplier: [product.supplier,[Validators.required]],
      cnpj: [product.cnpj,[Validators.required]]
    });
  }


  hasError(field: string) {
    return this.productForm.get(field)?.errors;
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.productForm.value);
    if(this.productForm.valid) {
      console.log('submit');
      let msgSuccess = 'Registered successfully!';
      let msgError = 'Error registering product. Try again!';
      if(this.productForm.value.id) {
        'Successfully updated product!';
        'Error when updating product. Try again!';
      }

      this.productService.save(this.productForm.value).subscribe({
        next: (success) => {
          this.modal.showAlertSuccess('Successfully updated product'),
          this.location.back();
        },
        error: (error) => {
          this.modal.showAlertDanger('Error when updating product. Try again!');
        }
      });
    }
  }

  onCancel() {
    this.submitted = false;
    this.productForm.reset();
  }

  onReturn() {
    this.location.back();
  }

  calc(): void {
    let purchasePrice = this.productForm.get('purchasePrice')?.value;
    let percentage = this.productForm.get('percentage')?.value;

    let calcVenda = purchasePrice + (purchasePrice * (percentage / 100));

    this.productForm.patchValue({
      saleValue: calcVenda
    })
  }

  calc2(): void {
    let amountSold = this.productForm.get('amountSold')?.value;
    let amountPurchase = this.productForm.get('amountPurchase')?.value;

    let calEstoque = amountPurchase - amountSold;

    this.productForm.patchValue({
      stock: calEstoque
    });
  }
}
