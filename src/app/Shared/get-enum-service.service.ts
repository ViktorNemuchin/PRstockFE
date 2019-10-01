import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {GetCategory, GetType, GetCompany, GetEmployee, GetProducts} from './get-enum-model';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class GetEnumServiceService {
  constructor(private http: HttpClient) {
  }

  getEnumCategory(): Observable<GetCategory[]> {
    const headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.get<GetCategory[]> ('http://voz.dsr-corporation.com:58281/api/PrProduct/Categories', {headers} );
  }

  getEnumType(): Observable<GetType[]> {
    const headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
   return this.http.get<GetType[]>('http://voz.dsr-corporation.com:58281/api/PrProduct/Types', {headers});
 }
 getEnumCompany(): Observable<GetCompany[]> {
  const headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
   return this.http.get<GetCompany[]>('http://voz.dsr-corporation.com:58281/api/PrProduct/Companies', {headers});
 }
 getEnumEmployees(): Observable<GetEmployee[]> {
  const headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  return this.http.get<GetEmployee[]>('http://voz.dsr-corporation.com:58281/api/PrProduct/Employees', {headers});
 }
 getEnumProducts(): Observable<GetProducts[]> {
  const headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  return this.http.get<GetProducts[]>('http://voz.dsr-corporation.com:58281/api/PrProduct/ProductsBrief', {headers});
 }
}
