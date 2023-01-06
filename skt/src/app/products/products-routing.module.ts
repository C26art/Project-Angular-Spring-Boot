import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductGuardGuard } from './guard/product-guard.guard';
import { HomeComponent } from './home/home.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UsersComponent } from './users/users.component';




const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'home', component: HomeComponent},
  { path: 'login', component: UsersComponent},
  { path: 'new', component: ProductCreateComponent, resolve: {
    product: ProductGuardGuard
  }},
  { path: 'edit/:id', component: ProductCreateComponent, resolve: {
    product: ProductGuardGuard }}  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
