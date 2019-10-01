import { PutProductModel } from './../Shared/put-models';
import { PutOperationService } from './../Shared/put-operation.service';
import { UploadService } from './../Shared/upload.service';
import { ProductDetailsModel } from './../Shared/product-details-model';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { GetOperationsService } from './../Shared/get-operations.service';
import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { from } from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css'],
  providers: [GetOperationsService, UploadService, PutOperationService]
})
export class ProductdetailsComponent implements OnInit {
  public product: ProductDetailsModel;
  id: string = name;
  defaultUrl = 'http://voz.dsr-corporation.com:58281/Uploads/Images/default.png';
  Today = Date.now();
  private expired: boolean;
  constructor(private route: ActivatedRoute,
  private getoperationservice: GetOperationsService,
  private router: Router,
  private location: Location,
  public uploadService: UploadService,
  private modal: NgbModal,
  private putService: PutOperationService
  ) {
    this.route.paramMap.subscribe(params => {this.id = params.get('id'); } );
    this.getproduct(this.id);
  }

  ngOnInit() {
  }
   getproduct(id: string) {
    this.getoperationservice.getProduct(id).subscribe(data => {this.product = data; });
   }
   getBack() {
     this.location.back();
   }
   compareDates(ExpirationDate: Date) {
     const dNow = new Date(this.Today);
     const dExpired = new Date(ExpirationDate);
     return dNow > dExpired;
   }
   productUpdate(imageInput: any) {
     const putProduct = new PutProductModel;
     const file: File = imageInput.files[0];
     const url = 'http://voz.dsr-corporation.com:58281/Uploads/Images/';
     putProduct.ProductId = this.id;
     putProduct.ImageUrl = url + file.name;
     this.uploadService.processFile(imageInput);
     this.putService.putProductImage(putProduct).subscribe();
     setTimeout(() => { this.product.PictureUrl = url + file.name; }, 1000);
     console.log(this.product);
   }
  }
