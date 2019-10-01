import { ImageServiceService } from './../Shared/image-service.service';
import { PostOperationsService } from './../Shared/post-operations.service';
import { PostProductModel } from './../Shared/post-product-model';
import { FormBuilder, Validators } from '@angular/forms';
import { GetEnumServiceService } from './../Shared/get-enum-service.service';
import { Component, OnInit } from '@angular/core';
import {GetCategory, GetType, GetCompany, GetEmployee} from '../Shared/get-enum-model';
import {ActivatedRoute, Router} from '@angular/router';
import {NgbCalendar, NgbDatepicker, NgbDateAdapter, NgbDateStruct, NgbDateNativeAdapter} from '@ng-bootstrap/ng-bootstrap';
import { formatDate, DatePipe } from '@angular/common';




class ImageSnippet {
  pending = false;
  status = 'init';

  constructor(public src: string, public file: File) {}
}


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
  providers: [GetEnumServiceService,
    PostOperationsService,
    {provide: NgbDateAdapter, useClass: NgbDateNativeAdapter }]
})
export class AddProductComponent implements OnInit {
  selectedFile: ImageSnippet;
  Types: GetType[];
  Categories: GetCategory[];
  Companies: GetCompany[];
  Employees: GetEmployee[];
  Product: PostProductModel;
  Pathsrc;
  Submitted = false;
    productForm = this.prfb.group({
      ProductName: ['', Validators.required],
      Detail: [''],
      TypeId: this.Types,
      Price: ['', Validators.required],
      Quantity: ['', Validators.required],
      PictureUrl: [''],
      TemplateUrl: [''],
      ProductState: [''],
      CompanyId: this.Companies,
      event: this.prfb.group({
        EventName: ['Invoice'],
        EventDescription: [''],
        PrCategoryId: [],
        StartDate: [''],
        EndDate: [''],
        EventUri: [''],
        EventType: ['Invoice'],
        PersonId: this.Employees,
        Quantity: ['']
      }),
  });
  ngOnInit() {
    this.GetEnumType();
    this.GetEnumCategory();
    this.GetEnumCompany();
    this.GetEnumEmployee();
  }
  constructor (
    private route: ActivatedRoute,
    private router: Router,
    private getoperationservice: GetEnumServiceService,
    private prfb: FormBuilder,
    private postoperationservice: PostOperationsService,
    private imageService: ImageServiceService
    ) { }

   GetEnumType() {
     this.getoperationservice.getEnumType().subscribe(
       data => {this.Types = data;
        console.log(this.Types);
      });
   }
   GetEnumCategory() {
     this.getoperationservice.getEnumCategory().subscribe(data => {this.Categories = data; console.log(this.Categories); });
   }
   GetEnumCompany() {
     this.getoperationservice.getEnumCompany().subscribe(data => {this.Companies = data; console.log(this.Companies); } );
     console.log(this.Companies);
   }
   GetEnumEmployee() {
     this.getoperationservice.getEnumEmployees().subscribe(data => {this.Employees = data; console.log(this.Employees); } );
   }
   onSubmit(productForm) {
    this.Pathsrc = this.selectedFile.file.name;
    this.Submitted = true;
       const url = 'http://voz.dsr-corporation.com:58281/Uploads/Images/';
       this.Product = this.productForm.value;
       this.Product.PictureUrl = url + this.Pathsrc;
       console.log(this.Product);
       this.postoperationservice.postProduct(this.Product).subscribe(
        (res) => {
          this.onAddSuccess();
        },
        (err) => {
          this.onError();
        }
       );
  }

  private onAddSuccess() {
    this.router.navigate(['/types']);
    console.log('Success');
  }
  private onSuccess() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'ok';
  }

   private onError() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'fail';
    this.selectedFile.src = '';
  }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();
    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);

      this.selectedFile.pending = true;
      this.imageService.uploadImage(this.selectedFile.file).subscribe(
        (res) => {
          this.onSuccess();
        },
        (err) => {
          this.onError();
        });
    });

    reader.readAsDataURL(file);
  }
}


