import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class UserRegistrationData {
	
	DEVICE_TOKEN = 'deviceToken';
	WEDDING_ID = 'weddingId';

	constructor(
		public storage: Storage
		) {}

	getDeviceToken(): Promise<string> {
		return this.storage.get(this.DEVICE_TOKEN).then((value) => { 
			return value;
		}); 
	};

	setDeviceToken(deviceToken: string): void {
		this.storage.set(this.DEVICE_TOKEN, deviceToken);
	};

	getWeddingId(): Promise<string> {
		return this.storage.get(this.WEDDING_ID).then((value) => {
			return value;
		});
	};

	setWeddingId(weddingId: string): void {
		this.storage.set(this.WEDDING_ID, weddingId);
	};

	removeWeddingId(): void {
		this.storage.remove(this.WEDDING_ID);
	};

	/**
	* Returns true/false by checking for weddingId in storage
	*/
	isRegistered(): Promise<boolean> {
		return this.storage.get(this.WEDDING_ID).then((value) => {
			return value != null;
		});
	};
}