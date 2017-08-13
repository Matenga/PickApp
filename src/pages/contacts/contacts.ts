import { Component } from '@angular/core';
import { NavController, NavParams,Platform  } from 'ionic-angular';
//import { Contacts } from '@ionic-native/contacts';
import { AddContactPage } from '../add-contact/add-contact';
import { Contacts, ContactFieldType, ContactFindOptions } from 'ionic-native';
/**
 * Generated class for the ContactsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html',
  providers: [Contacts]
})
export class ContactsPage {
  contactsfound = [];
    search = false;
     
  contactList: any;
  Addcontacts: any;
  page:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform, private contacts: Contacts ) { 
      this.platform.ready().then(() => {
       var opts = { 
          filter: 'o',                                 
          multiple: true,        
          hasPhoneNumber:true,                             
        };
        Contacts.find([ 'photos','displayName', 'name' ],opts).then((Contacts) => {
          this.contactList=Contacts;
        }, (error) => {
          console.log(error);
        })
    })

    this.Addcontacts = [{page:AddContactPage}];
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactsPage');
  }

  openPage(page){
    this.navCtrl.push(page);
  }

  newContact() {
        this.navCtrl.push(AddContactPage);
    }
     findContact(ev:any) {
        let fields:ContactFieldType[] = ['displayName'];
 
        const options = new ContactFindOptions();
        options.filter = ev.target.value;
        options.multiple = true;
        options.hasPhoneNumber = true;
 
        Contacts.find(fields, options).then((Contacts) => {
            this.contactsfound = Contacts;
            console.log(JSON.stringify(Contacts[0]));
        });
 
        if(this.contactsfound.length == 0){
            this.contactsfound.push({displayName: 'No Contacts found'});  
        }
        this.search = true;
    } 

}