import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Contacts, Contact, ContactField, ContactName } from 'ionic-native';
 

/**
 * Generated class for the AddContactPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-add-contact',
  templateUrl: 'add-contact.html',
  providers: [Contacts]
})
export class AddContactPage {
  newcontact = {
    displayName:'',
    nickname:'',
    phNumber:'',
    phType:''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  addContact(newct) {
      var contact = Contacts.create();
      contact.displayName = newct.displayName;
      contact.nickname = newct.nickname;
       
      var field = new ContactField();
      field.type = newct.phType;
      field.value = newct.phNumber;
      field.pref = true;
       
      var numberSection = [];
      numberSection.push( field );
      contact.phoneNumbers = numberSection;
       
      contact.save().then((value) => {
          alert('saved');
         }, (error) => {
        alert(error);
      })   
  }

   ionViewDidLoad() {
    console.log('ionViewDidLoad AddContactPage');
  }
}
