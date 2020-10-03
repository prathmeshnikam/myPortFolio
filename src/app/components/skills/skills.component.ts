import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '@app/services/shared-data.service';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  public skillsData: any
  constructor(public _sharedService: SharedDataService) { }

  ngOnInit(): void {
    this._sharedService.storeMyData.subscribe((data: any) => {
      this.skillsData = data.professionalDetails;
    });
  }
}
