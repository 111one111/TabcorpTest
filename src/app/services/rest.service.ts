import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Response } from '../interfaces/response.interface';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  /**
   * Used for all post requests
   * @param url url required for http post to hit
   * @param payload object to send
   */
  postRequest(url: string, payload: any): Observable<Response> {
    return this.http.post<Response>(url, payload)
    .pipe();
  }

  /**
   * Used for all Get Requests
   * @param url url required for http post to hit
   */
  getRequest(url: string): Observable<Response> {
    return this.http.get<Response>(url)
    .pipe();
  }

  private handleError(error: HttpErrorResponse) {
    console.error('The web app is having issues ${error.error}');
  }
}
