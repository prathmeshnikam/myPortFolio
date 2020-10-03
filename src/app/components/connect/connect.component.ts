import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '@app/services/shared-data.service';
import { ApiUrlsService } from '@app/services/api-urls.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormControl, FormArray, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss']
})
export class ConnectComponent implements OnInit {
  public userInfo: FormGroup;

  public personalDetails: any
  constructor(public _sharedService: SharedDataService, private _snackBar: MatSnackBar, private fb: FormBuilder, private _apiMetaData: ApiUrlsService) {
    this.setForm();
  }

  ngOnInit(): void {
    this._sharedService.storeMyData.subscribe((data: any) => {
      this.personalDetails = data.personalDetails;
      console.log(this.personalDetails);
    });
  }

  setForm() {
    this.userInfo = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      email: ['', [Validators.required, Validators.maxLength(25), Validators.email, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')]],
      comment: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(125)]],
    })
  }

  get userInfoError() { return this.userInfo.controls; }

  submitData() {
    if (this.userInfo.invalid) {
      return
    }
    console.log(this.userInfo.status);
    console.log(this.userInfo.value);

    this._sharedService.setloader(true);
    this._sharedService.callServices(this._apiMetaData._apiRequestType.post, this._apiMetaData._apiUrls.postUserInfo, this.userInfo.value).subscribe((response: any) => {
      if (response.code == 0) {
        this._snackBar.open(response.data.message, "Thank You", {
          duration: 3000,
        });
        this.userInfo.reset();
        this._sharedService.setloader(false);
      }
    }, error => {
      console.log(error);
    });
  }

  clearData() {
    this.userInfo.reset();
  }

}
