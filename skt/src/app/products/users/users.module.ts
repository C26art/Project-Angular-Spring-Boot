import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ProductsRoutingModule } from '../products-routing.module';
import { HomeRoutingModule } from '../home/home-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ProductsRoutingModule,
    HomeRoutingModule
  ]
})
export class UsersModule { }
