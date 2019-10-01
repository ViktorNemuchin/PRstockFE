import { GetType } from './../Shared/get-enum-model';
import { Component, OnInit } from '@angular/core';
import {GetEnumServiceService} from '../Shared/get-enum-service.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css'],
  providers: [GetEnumServiceService]
})
export class TypesComponent implements OnInit {
  types: GetType[];
  constructor(private getOperationsService: GetEnumServiceService,
  private route: ActivatedRoute) { }
  ngOnInit() {
    this.getPrTypes();
  }
  getPrTypes() {
    this.getOperationsService.getEnumType().subscribe(data => {this.types = data; console.log(this.types); });
  }
}
