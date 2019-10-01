import { ProductBriefModel } from './../Shared/event-detailed-model';
import { ActivatedRoute } from '@angular/router';
import { GetOperationsService } from './../Shared/get-operations.service';
import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],
  providers: [GetOperationsService]
})
export class AllProductsComponent implements OnInit {
  public products: ProductBriefModel[];
  searchText: string;

  constructor(
    private getoperations: GetOperationsService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.getProducts();
  }
  getProducts() {
    this.getoperations.getAllProduct().subscribe (data => {this.products = data; });
  }
  getBack() {
    this.location.back();
   }

}
