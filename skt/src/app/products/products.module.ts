import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { HomeComponent } from './home/home.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsRoutingModule } from './products-routing.module';
import { UsersComponent } from './users/users.component';





@NgModule({
  declarations: [
    ProductListComponent,
    ProductCreateComponent,
    HomeComponent,
    UsersComponent,

  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
  ],
  providers: []
})
export class ProductsModule { }
