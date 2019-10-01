import { PutProductModel } from './put-models';
import { Injectable } from '@angular/core';
import { PostCompanyModel } from './post-company-model';
import { PostProductModel } from './post-product-model';
import { PostEventModel } from './post-event-model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class PutOperationService {

  constructor(private http: HttpClient) {
  }
  putProductImage(updateImage: PutProductModel) {
    return this.http.post('http://voz.dsr-corporation.com:58281/api/PrProduct/UpdateImage', updateImage);
  }
}
