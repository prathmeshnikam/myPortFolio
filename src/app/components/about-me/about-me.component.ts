import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '@app/services/shared-data.service';


@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  public personalDetails: any
  constructor(public _sharedService: SharedDataService) { }

  ngOnInit(): void {
    this._sharedService.storeMyData.subscribe((data: any) => {
      this.personalDetails = data.personalDetails;
      console.log(this.personalDetails);
    });
  }

}
