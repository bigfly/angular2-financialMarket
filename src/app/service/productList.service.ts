import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { UUID } from 'angular2-uuid';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProductListService {

  //通过json-server把本地json文件放到本地服务器
  private api_url = 'http://localhost:3000/data'
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getList(param:Object): Promise<{}> {
    return this.http
            .get(this.api_url, {headers: this.headers})
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 
    return Promise.reject(error.message || error);
  }
}