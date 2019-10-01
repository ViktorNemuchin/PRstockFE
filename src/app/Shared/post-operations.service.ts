import { PostCompanyModel } from './post-company-model';
import { PostProductModel } from './post-product-model';
import { PostEventModel } from './post-event-model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { PostNewEvent } from './post-new-event-model';
import { PostTypeModel } from './type-model';



@Injectable({
  providedIn: 'root'
})
export class PostOperationsService {
  constructor(private http: HttpClient) { }

  postEvent(event: PostEventModel): Observable<any> {
    return this.http.post('http://voz.dsr-corporation.com:58281/api/PrProduct/AddEvent', event );
  }
  postNewEvent(event: PostNewEvent): Observable<any> {
    return this.http.post('http://voz.dsr-corporation.com:58281/api/PrProduct/AddNewEvent', event);
  }
  postProduct (product: PostProductModel): Observable<any> {
    return this.http.post('http://voz.dsr-corporation.com:58281/api/PrProduct/AddProduct', product);
  }
  postCompany (company: PostCompanyModel): Observable<any> {
    return this.http.post('http://voz.dsr-corporation.com:58281/api/PrProduct/AddCompany', company);
  }
  postType(type: PostTypeModel) {
    return this.http.post ('http://voz.dsr-corporation.com:58281/api/PrProduct/AddType', type);
  }
}
