import { GetEmployee, GetCategory } from './../Shared/get-enum-model';
import { GetEnumServiceService } from './../Shared/get-enum-service.service';
import { PostOperationsService } from './../Shared/post-operations.service';
import { PostEventModel } from './../Shared/post-event-model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {NgbDateNativeAdapter, NgbDatepicker, NgbDateAdapter} from '@ng-bootstrap/ng-bootstrap';

class AddEventHandler {
  Status = 'OnMove';
}
@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css'],
  providers: [GetEnumServiceService,
    PostOperationsService,
    {provide: NgbDateAdapter, useClass: NgbDateNativeAdapter }
  ]
})

export class AddEventComponent implements OnInit {
  EventStat = new AddEventHandler;
  Eventtypes: string[] ;
  PrEvent: PostEventModel;
  Id: string;
  Submitted = false;
  Employees: GetEmployee[];
  Categories: GetCategory[];
  constructor(
    private route: ActivatedRoute,
    private evfb: FormBuilder,
    private postOperationService: PostOperationsService,
    private rooter: Router,
    private getenumservice: GetEnumServiceService
    ) { }
  eventForm = this.evfb.group({
    EventName: ['', Validators.required],
    EventDescription: [''],
    EndDate: [''],
    EventUri: [''],
    EventType: this.Eventtypes,
    PersonId: this.Employees,
    PrCategoryId: this.Categories,
    Quantity: ['', Validators.required]
  });

  ngOnInit() {
    this.route.paramMap.subscribe(params => {this.Id = params.get('id'); });
    this.Eventtypes = ['Invoice', 'Taken'];
    console.log(this.Eventtypes);
    this.GetEnumEmployee();
  }
   OnSubmit() {
     this.Submitted = true;
     this.PrEvent = this.eventForm.value;
     this.PrEvent.ProductViewModelId = this.Id;
     console.log(this.PrEvent);
     this.postOperationService.postEvent(this.PrEvent).subscribe((res) => {this.onSuccess(); });
   }
   private onSuccess() {
     this.EventStat.Status = 'Ok';
     this.rooter.navigate(['/product/' + this.Id]);
  }

   private onError() {
    this.EventStat.Status = 'failed';
  }
  GetEnumEmployee() {
    this.getenumservice.getEnumEmployees().subscribe(data => {this.Employees = data; console.log(this.Employees); } );
  }
  GetEnumCategory() {
    this.getenumservice.getEnumCategory().subscribe(data => {this.Categories = data; console.log(this.Categories); } );

  }
}
