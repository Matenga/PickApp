import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { UsersPage} from '../users/users';
import { SmsPage } from '../sms/sms';
import { ContactsPage } from '../contacts/contacts';
import { AddContactPage } from '../add-contact/add-contact';
/*import { MissedCallPage } from '../missed-call/missed-call';
import { ChatPage } from '../chat/chat';

//import { SettingsPage } from '../settings/settings';

/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  contactPage : any;
  /*missedcall : any;
  chatpage : any;
  smspage : any;
  settingspage: any;*/
  contactlist : any;
  
  title : any;
  icon : any;
  
  badge: any;

components : any;
goo: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform) {
    this.components = [
      {title:'Contacts', icon:'people', page:ContactsPage},
      {title:'Missed', icon:'call',badge:9},
      {title:'Sms', icon:'mail',badge:3, page:SmsPage},
      {title:'Settings', icon:'cog',page:UsersPage}
    ];

    this.goo = [
      {title:'Going', icon:'mail'}
    ]; 
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  openPage(page){
    this.navCtrl.push(page);
  }
 

}