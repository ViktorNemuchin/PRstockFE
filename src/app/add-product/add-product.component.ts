import { UploadService } from './../Shared/upload.service';
import { ImageServiceService } from './../Shared/image-service.service';
import { PostOperationsService } from './../Shared/post-operations.service';
import { PostProductModel } from './../Shared/post-product-model';
import { FormBuilder, Validators } from '@angular/forms';
import { GetEnumServiceService } from './../Shared/get-enum-service.service';
import { Component, OnInit } from '@angular/core';
import {GetCategory, GetType, GetCompany, GetEmployee} from '../Shared/get-enum-model';
import {ActivatedRoute, Router} from '@angular/router';
import {NgbCalendar, NgbDatepicker, NgbDateAdapter, NgbDateStruct, NgbDateNativeAdapter} from '@ng-bootstrap/ng-bootstrap';
import { formatDate, DatePipe, Location } from '@angular/common';
import { PostTypeModel } from '../Shared/type-model';
import {debounceTime, map} from 'rxjs/operators';
import {Observable} from 'rxjs';



@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
  providers: [GetEnumServiceService,
    PostOperationsService,
    {provide: NgbDateAdapter, useClass: NgbDateNativeAdapter }]
})
export class AddProductComponent implements OnInit {
  Types: GetType[];
  DefaulType: GetType;
  Loading = false;
  Categories: GetCategory[];
  Companies: GetCompany[];
  Employees: GetEmployee[];
  public Product: PostProductModel;
  Pathsrc;
  Submitted = false;
    productForm = this.prfb.group({
      ProductName: ['', Validators.required],
      Detail: [''],
      TypeId: [''],
      Price: ['', Validators.required],
      Quantity: ['', Validators.required],
      PictureUrl: [''],
      TemplateUrl: [''],
      ProductState: [''],
      CompanyId: [''],
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
    this.GetEnumCategory();
    this.GetEnumCompany();
    this.GetEnumEmployee();
  }
  constructor (
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private getoperationservice: GetEnumServiceService,
    private prfb: FormBuilder,
    private postoperationservice: PostOperationsService,
    public uploadService: UploadService
    ) {
      this.GetEnumType();
     }

   GetEnumType() {
     this.getoperationservice.getEnumType().subscribe(
       data => {this.Types = data;
        console.log(this.Types);
      });
   }
   GetEnumCategory() {
     this.getoperationservice.getEnumCategory().subscribe(data => {this.Categories = data; });
   }
   GetEnumCompany() {
     this.getoperationservice.getEnumCompany().subscribe(data => {this.Companies = data; } );
     console.log(this.Companies);
   }
   GetEnumEmployee() {
     this.getoperationservice.getEnumEmployees().subscribe(data => {this.Employees = data; } );
   }
   getBack() {
    this.location.back();
   }
   onSubmit(productForm) {
    if (this.uploadService.selectedFile !== undefined) {
    this.Pathsrc = this.uploadService.selectedFile.file.name;
    } else {
      this.Pathsrc = 'default.png';
    }
    this.Submitted = true;
    const ChosenType: GetType = this.productForm.get('TypeId').value;
       const url = 'http://voz.dsr-corporation.com:58281/Uploads/Images/';
       this.Product = this.productForm.value;
       this.Product.PictureUrl = url + this.Pathsrc;
       console.log(ChosenType);
       this.Product.TypeId = ChosenType.TypeViewModelId;
       this.postoperationservice.postProduct(this.Product).subscribe(
        (res) => {
          this.onAddSuccess();
        },
        (err) => {
          this.onAddError();
        }
       );
  }

  private onAddSuccess() {
    this.Loading = false;
    this.router.navigate(['/types']);
  }
  private onAddError() {
    this.Loading = false;
    console.log(this.Loading);
    this.Submitted = false;
  }
  processFile1(imageInput: any) {
    this.uploadService.processFile(imageInput);
  }
  AddType(name: string) {
    this.Loading = true;
    const Type = new PostTypeModel;
    Type.TypeName = name;
    this.postoperationservice.postType(Type).subscribe();
    setTimeout(() => {this.GetEnumType(); this.Loading = false; }, 5000 );
  }
  compareFn(c1: GetType, c2: GetType): boolean {
    return c1 && c2 ? c1.TypeViewModelId === c2.TypeViewModelId : c1 === c2;
  }
  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      map(term => term === '' ? []
        : this.Types.filter(v => v.TypeName.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

  formatter = (x: {TypeName: string}) => x.TypeName;

}


