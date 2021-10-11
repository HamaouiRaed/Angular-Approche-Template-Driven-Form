import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductFormComponent } from './product-form/product-form.component';
import { TemplateDrivenFormComponentComponent } from './template-driven-form-component/template-driven-form-component.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: HomeComponent },
  { path: 'products/create', component:ProductFormComponent},
  { path: 'template-driven-form/create', component:TemplateDrivenFormComponentComponent}

]


@NgModule({
  declarations: [],
  imports:
    [RouterModule.forRoot(routes)],
  exports: [RouterModule]


})
export class AppRoutingModule { }
