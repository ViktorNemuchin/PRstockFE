import { GetOperationsService } from './../Shared/get-operations.service';
import { EventDetailedModel, ProductBriefModel } from './../Shared/event-detailed-model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';



@Component({
  selector: 'app-detailed-event',
  templateUrl: './detailed-event.component.html',
  styleUrls: ['./detailed-event.component.css'],
  providers: [GetOperationsService]
})
export class DetailedEventComponent implements OnInit {
  Event: EventDetailedModel;
  id: string = name;
  Today = Date.now;
  constructor(private router: ActivatedRoute,
    private getoperationservice: GetOperationsService) {
    this.router.paramMap.subscribe(params => {this.id = params.get('id'); });
    this.getEvent(this.id);
  }

  ngOnInit() {
    console.log (this.Event);
  }

  getEvent(id: string) {
    this.getoperationservice.getEvent(id).subscribe(data => {this.Event = data; });
  }
}
