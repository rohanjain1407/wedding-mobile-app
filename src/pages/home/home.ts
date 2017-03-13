import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { RegistrationPage } from '../../pages/register/register';
import { EventsPage } from '../../pages/events/events';
import { DeviceTokenApi } from '../../providers/deviceToken-api';
import { UserRegistrationData } from '../../providers/userRegistration-data';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html',
	providers: [DeviceTokenApi]
})

export class HomePage {

	menuItems = [
	{ "name": "Events", "action": EventsPage },
	{ "name": "Unregister", "action": RegistrationPage}
	];
	
	constructor(
		public navCtrl: NavController, 
		public deviceTokenApi: DeviceTokenApi,
		public toastCtrl: ToastController,
		public userData: UserRegistrationData) {
		//TODO check here for devce token from push api//
		//compare with one in storage
		//if changed make api call to update and update in storage
	}

	menuItemClicked(item) {
		var name = item["name"];
		var action = item["action"];
		
		if (name == "Unregister") {
			this.unregister()
		}
		else {
			this.navCtrl.push(action);  
		}
	}

	/**
	*  Unregisters user by removing weddingId key from storage.
	*  WeddingId key when set makes HomePage as the app Root Page
	*/
	unregister() {
		this.userData.getDeviceToken().then((deviceToken) => {
			this.deviceTokenApi.deleteToken(deviceToken).subscribe(
				data => {
					this.userData.removeWeddingId();
					this.navCtrl.setRoot(RegistrationPage);  
				},
				err => {
					//Not removing from storage in this case
					let toast = this.toastCtrl.create({
						message: "Error occurred during unregistration",
						duration: 3000,
						position:"top"
					});
					toast.present();
					this.navCtrl.setRoot(RegistrationPage); 
				}
			);
		});
	}
}
