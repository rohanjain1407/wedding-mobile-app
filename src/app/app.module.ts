import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { Storage } from '@ionic/storage';
import { RegistrationPage } from '../pages/register/register';
import { HomePage } from '../pages/home/home';
import { EventsPage } from '../pages/events/events';
import { UserRegistrationData } from '../providers/userRegistration-data';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': 'a8357937'
  },
  'push': {
    'sender_id': '1067383555643',
    'pluginConfig': {
      'ios': {
        'badge': true,
        'sound': true
      },
      'android': {
        'iconColor': '#343434'
      }
    }
  }
};

@NgModule({
  declarations: [
    MyApp,
    RegistrationPage,
    HomePage,
    EventsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RegistrationPage,
    HomePage,
    EventsPage
  ],
  providers: [Storage, UserRegistrationData, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
