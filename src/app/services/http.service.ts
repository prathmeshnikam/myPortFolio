import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

  get(url, headers?, ...body): Observable<any> {
    return this.http.get(url)
      .pipe(
        retry(0),
        catchError((error: HttpErrorResponse) => {
          let data = {};
          data = { reason: error };
          // this.displayError(data);
          // this.sharedService.hideLoader();
          return throwError(error);
        })
      );
  }


  post(url, body, headers?): Observable<any> {
    return this.http.post(url, body)
      .pipe(
        retry(0),
        catchError((error: HttpErrorResponse) => {
          let data = {};
          data = { reason: error };
          return throwError(error);
        })
      );
  }
}
