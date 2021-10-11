import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductFormComponent } from './product-form/product-form.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: HomeComponent },
  { path: 'products/create', component:ProductFormComponent}

]


@NgModule({
  declarations: [],
  imports:
    [RouterModule.forRoot(routes)],
  exports: [RouterModule]


})
export class AppRoutingModule { }
