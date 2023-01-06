import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ProductsRoutingModule } from '../products-routing.module';
import { UsersRoutingModule } from '../users/users-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ProductsRoutingModule,
    UsersRoutingModule
  ]
})
export class HomeModule { }
