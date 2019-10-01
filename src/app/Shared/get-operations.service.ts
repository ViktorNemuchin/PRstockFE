import { EventDetailedModel } from './event-detailed-model';
import { ProductModel } from './product-model';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TypeModel} from './type-model';
import {ProductDetailsModel} from './product-details-model';
import 'rxjs';
@Injectable()
export class GetOperationsService {
SelectedProduct: ProductDetailsModel;
ListPrType: TypeModel[];
ListPrProducts: ProductModel[];

  constructor(private http: HttpClient ) { }

  getPrType(): Observable<TypeModel[]> {
    return this.http.get<TypeModel[]>('http://voz.dsr-corporation.com:58281/api/PrProduct/DetailedTypes');
  }
  getProducts(type: string): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]> ('http://voz.dsr-corporation.com:58281/api/PrProduct/products/' + type);
  }
  getProduct(id: string): Observable<ProductDetailsModel> {
    return this.http.get<ProductDetailsModel>('http://voz.dsr-corporation.com:58281/api/PrProduct/ProductDetail/' + id).pipe();
  }
  getEvent (id: string): Observable<EventDetailedModel> {
    return this.http.get<EventDetailedModel>('http://voz.dsr-corporation.com:58281/api/PrProduct/EventDetails/' + id).pipe();
  }
  getProductsByCat(Category: string): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>('http://voz.dsr-corporation.com:58281/api/PrProduct/productsbycat/' + Category).pipe();
  }
}

