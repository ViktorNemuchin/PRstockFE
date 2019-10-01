import { NgSelectModule } from '@ng-select/ng-select';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { TypesComponent } from './types/types.component';
import { ProductsComponent } from './products/products.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { AddEventComponent } from './add-event/add-event.component';
import { AddTypeComponent } from './add-type/add-type.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { UploadFormComponent } from './upload-form/upload-form.component';
import { ProductPipePipe } from './pipes/product-pipe.pipe';
import { AddNewEventComponent } from './add-new-event/add-new-event.component';
import { DetailedEventComponent } from './detailed-event/detailed-event.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductscatComponent } from './productscat/productscat.component';



@NgModule({
  declarations: [
    AppComponent,
    TypesComponent,
    ProductsComponent,
    ProductdetailsComponent,
    AddEventComponent,
    AddTypeComponent,
    AddProductComponent,
    AddCompanyComponent,
    UploadFormComponent,
    ProductPipePipe,
    AddNewEventComponent,
    DetailedEventComponent,
    CategoriesComponent,
    ProductscatComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
