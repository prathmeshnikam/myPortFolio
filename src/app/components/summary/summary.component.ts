import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '@app/services/shared-data.service';


@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  public summaryData: any
  constructor(public _sharedService: SharedDataService) { }

  ngOnInit(): void {
    this._sharedService.storeMyData.subscribe((data: any) => {
      this.summaryData = data.professionalDetails;
      console.log(this.summaryData);
    });
  }
}
