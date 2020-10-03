import { Component, OnInit } from '@angular/core';
import { ApiUrlsService } from '@app/services/api-urls.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  hideSmallNav: boolean = false;
  constructor(private _apiMetaData: ApiUrlsService, public router: Router) { }

  ngOnInit(): void {
  }

  openPdf() {
    window.open(this._apiMetaData._pdfUrl.openPdf, '_blank');
  }

  showHeader() {
    this.hideSmallNav = !this.hideSmallNav;
    var x: any = document.getElementById("smallHeader");
    if (x.style.display === "block") {
      x.style["display"] = "none";
    } else {
      x.style["display"] = "block";
    }
  }

  goToNext(route) {
    var x: any = document.getElementById("smallHeader");
    if (x.style.display === "block") {
      x.style["display"] = "none";
    }
    this.router.navigate([route])
  }

}
