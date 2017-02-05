import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
/*
  Generated class for the WeddingApi provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

var LOCALHOST = '192.168.1.64';
	// set this to your localhost ip

@Injectable()
export class WeddingApi {

  constructor(public http: Http) {
    console.log('Hello WeddingApi Provider');
  }

  registerToken(weddingId, token): Observable<any> {
		let headers = new Headers({ 'Content-Type': 'application/json' });
    	let options = new RequestOptions({ headers: headers });
		var args = {"deviceToken": token, "weddingId": weddingId};
		var url = "http://" +LOCALHOST+ ":8080/weddingApi/rest/deviceToken/add";
		var response = this.http.post(url, args, options).map(res => res.json());
        return response;
  }
}
