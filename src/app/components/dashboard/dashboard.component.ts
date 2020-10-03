import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '@app/services/shared-data.service';
import { ApiUrlsService } from '@app/services/api-urls.service';
import { Router } from '@angular/router';

export interface personalData {
  // isFamilyPlan?: boolean; 
  // mobileNumbar?: Array<number>;
  // fname?: string;
  // // preview?: PatientFormComponentDataPreview;
  // previewMedicinesMode?: boolean;
  // addMoreMode?: boolean; 

  fname?: string;
  lname?: string;
  dob?: string;
  mail?: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public getData: personalData;
  constructor(public _sharedService: SharedDataService, private _apiMetaData: ApiUrlsService, public router: Router) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.getMyProfile();
  }

  getMyProfile(): void {
    this._sharedService.setloader(true);
    this._sharedService.callServices(this._apiMetaData._apiRequestType.get, this._apiMetaData._apiUrls.getMyProfile).subscribe((response: any) => {
      if (response.code == 0) {
        this._sharedService.updateMyData(response.data);
        this.getData = response.data.personalDetails;
        console.log(this.getData);
        this._sharedService.setloader(false);
      }
    }, error => {
      console.log(error);
    });
  }

  goToPortFolio() {
    this.router.navigate(['/portfolio']);
  }
}
