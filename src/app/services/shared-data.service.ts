import { Injectable } from '@angular/core';
import { HttpService } from '@app/services/http.service';
import { ApiUrlsService } from '@app/services/api-urls.service';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private loaderS = new Subject<boolean>();
  private allMyData = new BehaviorSubject<any>(null);

  loader$ = this.loaderS.asObservable();
  public storeMyData = this.allMyData.asObservable();

  constructor(public http: HttpService, private _apiMetaData: ApiUrlsService) { }


  public setloader(loaderVal) {
    this.loaderS.next(loaderVal);
  }

  updateMyData(data: any) {
    this.allMyData.next(data)
  }

  callServices(type, url, body?, headers?) {
    let options: any = 'headers';
    if (type == this._apiMetaData._apiRequestType.get) {
      let getResp: any = this.http.get(url)
      return getResp;
    } else if (type == this._apiMetaData._apiRequestType.post) {
      let postResp: any = this.http.post(url, body)
      return postResp
    }
  }
}
