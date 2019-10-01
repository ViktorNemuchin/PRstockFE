import { GetOperationsService } from './../Shared/get-operations.service';
import { ProductModel } from './../Shared/product-model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-productscat',
  templateUrl: './productscat.component.html',
  styleUrls: ['./productscat.component.css'],
  providers: [GetOperationsService]
})
export class ProductscatComponent implements OnInit {
  public products: ProductModel[];
  public searchText: string;
  cat: string;
  ErrorMessage: any;
  constructor(private getOpService: GetOperationsService,
    private route: ActivatedRoute,
    private location: Location) {
      this.route.paramMap.subscribe(params => {this.cat = params.get('cat'); } );
      this.getproducts(this.cat);
     }

  ngOnInit() {
  }
  getproducts(cat: string) {
    this.getOpService.getProductsByCat(cat).subscribe(data => {this.products = data; });
  }
  getBack() {
    this.location.back();
  }

}
