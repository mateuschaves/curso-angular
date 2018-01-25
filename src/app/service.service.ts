import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IData }  from './data';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { HttpErrorResponse } from '@angular/common/http/src/response';

@Injectable()
export class ServiceService {

  constructor(private http: HttpClient) { }

  public url = 'https://jsonplaceholder.typicode.com/posts';


  getData(): Observable<IData[]>
  {
      return this.http.get<IData[]>(this.url)
                      .catch(this.errorHandler);
  }

  errorHandler(error: HttpErrorResponse)
  {
      return Observable.throw(error.message || "Server error");
  }

}
