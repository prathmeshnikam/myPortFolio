import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class ApiUrlsService {

  constructor() { }

  _apiRequestType = {
    get: "GET",
    post: "POST",
  }

  public _pdfUrl = {
    openPdf: '/assets/PrathmeshResume.pdf'
  }
  _apiUrls = {
    getMyProfile: environment.baseUrl + "v3/fa3f12a6-be15-4234-85ac-85628c7935d1",
    postUserInfo: environment.baseUrl + "v3/38efec09-c53b-4aed-ae43-175489a066e7"
  }
}
