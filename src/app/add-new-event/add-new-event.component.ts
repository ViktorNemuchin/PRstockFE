import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { GetEmployee, GetCategory, GetProducts } from './../Shared/get-enum-model';
import { GetEnumServiceService,  } from './../Shared/get-enum-service.service';
import { PostOperationsService } from './../Shared/post-operations.service';
import { PostNewEvent} from './../Shared/post-new-event-model' ;
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {NgbDateNativeAdapter, NgbDatepicker, NgbDateAdapter} from '@ng-bootstrap/ng-bootstrap';
import {NgSelectModule, NgOption} from '@ng-select/ng-select';


class AddEventHandler {
  Status = 'OnMove';
}

@Component({
  selector: 'app-add-new-event',
  templateUrl: './add-new-event.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./add-new-event.component.css'],
  providers: [GetEnumServiceService,
    PostOperationsService,
    {provide: NgbDateAdapter, useClass: NgbDateNativeAdapter }
  ]
})
export class AddNewEventComponent implements OnInit {
  selectedProduct: number[];
  selectedCategory: number[];
  EventStat = new AddEventHandler();
  Eventtypes: string[] ;
  PrEvent: PostNewEvent;
  Id: string;
  Submitted = false;
  Employees: GetEmployee[];
  Categories: GetCategory[];
  EnumProducts: GetProducts[];
  eventForm: FormGroup;
  constructor( private route: ActivatedRoute,
    private evfb: FormBuilder,
    private postOperationService: PostOperationsService,
    private rooter: Router,
    private getenumservice: GetEnumServiceService) {
      this.GetEnumEmployee();
      this.GetEnumProducts();
      this.GetEnumCategory();
    }

  ngOnInit() {
    this.Eventtypes = ['Invoice', 'Taken'];
    console.log(this.Eventtypes);
    this.GetEnumProducts();
    this.eventForm = this.evfb.group({
      'EventName': [''],
      'EventDescription': [''],
      'EndDate': [''],
      'EventUri': [''],
      'EventType': null,
      'PersonId': null,
      'Products': this.evfb.array([])
    });
  }
  OnSubmit() {
    this.Submitted = true;
    this.PrEvent = this.eventForm.value;
    console.log(this.PrEvent);
    console.log(this.getproducts());
    this.postOperationService.postNewEvent(this.PrEvent).subscribe((res) => {this.onSuccess(); });
  }
  private onSuccess() {
    this.EventStat.Status = 'Ok';
    this.rooter.navigate(['/types']);
 }
getproducts(): FormArray {
  return this.eventForm.get('Products') as FormArray;
}
AddProduct() {
  const control = <FormArray> this.eventForm.controls.Products;
  control.push(this.evfb.group({
    'ProductId'      : [null],
    'CategoryId'     : [null],
    'TakenQuantity'  : [],
  }));
}
removeProduct(index) {
  const control = <FormArray> this.eventForm.controls.Products;
  control.removeAt(index);
}
createProduct(): FormGroup {
  return this.evfb.group({
   ProductId: null,
   Quantity: null,
   Category: null,
  });
}


  GetEnumEmployee() {
    this.getenumservice.getEnumEmployees().subscribe(data => {this.Employees = data;  } );
  }
  GetEnumCategory() {
    this.getenumservice.getEnumCategory().subscribe(data => {this.Categories = data;  } );
  }
  GetEnumProducts() {
    this.getenumservice.getEnumProducts().subscribe(data => {this.EnumProducts = data; console.log(data); } );
  }

}
