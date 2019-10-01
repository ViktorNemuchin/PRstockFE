import { ActivatedRoute } from '@angular/router';
import { ProductModel } from './../Shared/product-model';
import { GetOperationsService } from './../Shared/get-operations.service';
import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { share } from 'rxjs/internal/operators/share';
import { Observable } from 'rxjs/internal/Observable';
import {catchError, delay, delayWhen, finalize, map, retryWhen, shareReplay, tap} from 'rxjs/operators';
import { timer } from 'rxjs';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [GetOperationsService]
})
export class ProductsComponent implements OnInit {
  products: ProductModel[];
  type: string;
  ErrorMessage: any;
  searchText: string;
  constructor(
    private getoperations: GetOperationsService,
    private route: ActivatedRoute,
    private location: Location
    ) {
    this.route.paramMap.subscribe(params => {this.type = params.get('type'); } );
    this.getproducts(this.type);
  }

  ngOnInit() {
  }

   getproducts(type: string) {
    return  this.getoperations.getProducts(type).subscribe(data => {this.products = data; });
   }
   getBack() {
    this.location.back();
   }
}
