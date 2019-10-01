import { ActivatedRoute } from '@angular/router';
import { GetCategory } from './../Shared/get-enum-model';
import { GetEnumServiceService } from './../Shared/get-enum-service.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  providers: [GetEnumServiceService]
})
export class CategoriesComponent implements OnInit {
  Categories: GetCategory[];
  constructor(private getCat: GetEnumServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
   this.getCategoies();
  }
 getCategoies() {
   this.getCat.getEnumCategory().subscribe (data => {this.Categories = data; });
 }
}
