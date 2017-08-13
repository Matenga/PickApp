import { Component,ViewChild } from '@angular/core';
import { Nav,Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { AngularFire } from 'angularfire2';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
//import { HomePage } from '../pages/home/home';
import { AuthProvider } from '../providers/auth-provider/auth-provider';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
   rootPage:any;
   menuitems: any;
   icon: any;
   title: any;
   page: any;

  constructor(platform: Platform, public af: AngularFire, public authProvider:AuthProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
      this.intialize();
    });
    this.menuitems = [
      { title: 'Home', page: 'HomePage', icon: 'home'},
      { title: 'Chat', page: 'ChatPage', icon: 'people'},
      { title: 'Settings', page: 'SettingsPage', icon: 'settings'},
      { title: 'Custom SMS', page: 'SmsPage', icon: 'mail'},
      { title: 'Get Help', page: '',icon: 'help'},
      { title: 'Logout', page: '', icon:'logout'},
       ];
  }

  intialize() {
    this.af.auth.subscribe(auth => {
       if(auth) {
          this.rootPage = TabsPage;
        } else {
          this.rootPage = LoginPage;
        }
    });
  }

   OpenPage(page){
    this.nav.push(page);
  }
}
