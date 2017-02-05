import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import {
  Push,
  PushToken
} from '@ionic/cloud-angular';

import { WeddingApi } from '../../providers/wedding-api'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [WeddingApi]
})

export class HomePage {
	weddingId: any; 
  	constructor(public navCtrl: NavController, public push: Push, private weddingApi: WeddingApi) {
	    this.push.register().then((t: PushToken) => {
	  		return this.push.saveToken(t);
		}).then((t: PushToken) => {
	  		console.log('Token saved:', t.token);
		});
	}

	register() {
		console.log('register');
		if (this.push.token != undefined) {
			console.log("weddingID:" + this.weddingId);
			this.weddingApi.registerToken(this.weddingId, this.push.token.token).subscribe(
				data => {
					console.log(data);
				},
				err => {
					console.log('ERROR:'+err.toString());
			});
		}
		else {
			console.log('Error cannot register, Token undefined');
		}
	}
}
