import { ProductDetailsModel } from './../Shared/product-details-model';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { GetOperationsService } from './../Shared/get-operations.service';
import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { from } from 'rxjs';


@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css'],
  providers: [GetOperationsService]
})
export class ProductdetailsComponent implements OnInit {
  product: ProductDetailsModel;
  id: string = name;
  Today = Date.now;
  constructor(private route: ActivatedRoute,
  private getoperationservice: GetOperationsService,
  private router: Router,
  private location: Location
  ) {
    this.route.paramMap.subscribe(params => {this.id = params.get('id'); } );
    this.getproduct(this.id);
  }

  ngOnInit() {
  }
   getproduct(id: string) {
    this.getoperationservice.getProduct(id).subscribe(data => {this.product = data; console.log(this.product); });
   }
}
