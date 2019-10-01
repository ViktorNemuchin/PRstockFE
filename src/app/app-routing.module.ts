import { AllProductsComponent } from './all-products/all-products.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductscatComponent } from './productscat/productscat.component';
import { AddNewEventComponent } from './add-new-event/add-new-event.component';
import { DetailedEventComponent } from './detailed-event/detailed-event.component';
import { AddEventComponent } from './add-event/add-event.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductsComponent } from './products/products.component';
import { TypesComponent } from './types/types.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddCompanyComponent} from './add-company/add-company.component';




const routes: Routes = [
{path: '', redirectTo: '/categories', pathMatch: 'full'},
{path: 'types', component: TypesComponent, pathMatch: 'full'},
{path: 'products/:type', component: ProductsComponent, pathMatch: 'full'},
{path: 'productscat/:cat', component: ProductscatComponent, pathMatch: 'full'},
{path: 'categories', component: CategoriesComponent, pathMatch: 'full'},
{path: 'product/:id', component: ProductdetailsComponent, pathMatch: 'full' },
{path: 'event/:id', component: DetailedEventComponent, pathMatch: 'full'},
{path: 'AddProduct', component: AddProductComponent, pathMatch: 'full'},
{path: 'AddEvent/:id', component: AddEventComponent, pathMatch: 'full'},
{path: 'AddEvent', component: AddNewEventComponent, pathMatch: 'full' },
{path: 'AddCompany', component: AddCompanyComponent, pathMatch: 'full'},
{path: 'products', component: AllProductsComponent, pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
