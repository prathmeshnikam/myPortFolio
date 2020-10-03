import { Component } from '@angular/core';
import { SharedDataService } from './services/shared-data.service';
import { Router, RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation]
})
export class AppComponent {

  title = 'Prathmesh Nikam';
  showLoading: boolean = true;

  constructor(public _sharedService: SharedDataService, public router: Router, private _snackBar: MatSnackBar, ) {
    if (!window.navigator.onLine) {
      this._snackBar.open("Please check your internet connection", "You are oofline", {
        duration: 9000,
      });
    }
  }

  ngOnInit() {
    this.router.navigate(['']);
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this._sharedService.loader$.subscribe(
        loaderVal => {
          this.showLoading = loaderVal;
        });
    });
  }

  addAnimationRoute(outlet: RouterOutlet) {
    console.log("object");
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}

