import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '@app/services/shared-data.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  public projectInfo: any
  constructor(public _sharedService: SharedDataService) { }

  ngOnInit(): void {
    this._sharedService.storeMyData.subscribe((data: any) => {
      this.projectInfo = data.professionalDetails.projects;
      console.log(this.projectInfo);
    });
  }

}
