import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IData }  from './data';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ServiceService {

  constructor(private http: HttpClient) { }

  public url = 'https://jsonplaceholder.typicode.com/posts';


  getData(): Observable<IData[]>
  {
      return this.http.get<IData[]>(this.url);
  }

}
