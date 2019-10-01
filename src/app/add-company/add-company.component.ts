import { Location } from '@angular/common';
import { CompanyContactsModel } from './../Shared/company-contacts-model';
import { GetEnumServiceService } from './../Shared/get-enum-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PostCompanyModel } from './../Shared/post-company-model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { PostOperationsService } from './../Shared/post-operations.service';


class AddEventHandler {
  Status = 'OnMove';
}

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {
  companyForm: FormGroup;
  submitted = false;
  newCompany: PostCompanyModel;
  companyState = new AddEventHandler;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cFb: FormBuilder,
    private postOperService: PostOperationsService,
    private location: Location
    ) { }
  ngOnInit() {
    this.companyForm = this.cFb.group({
      'PostCompanyName': [null] ,
      'CompanyWebsite': [null] ,
      'CompanyContacts' : this.cFb.group({
        'FirstName': [null],
        'LastName': [null],
        'Mobile': [null],
        'Email': [null]
      })
    });
  }
  onSubmit() {
    this.submitted = true;
    this.newCompany = this.companyForm.value;
    this.postOperService.postCompany(this.newCompany).subscribe((res) => {this.onSuccess(); });
  }
  private onSuccess() {
    this.submitted = false;
    this.companyState.Status = 'Ok';
    this.router.navigate(['/categories']);
 }
 getBack() {
   this.location.back();
 }
}
