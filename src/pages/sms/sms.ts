import { Component } from '@angular/core';
import { NavController, NavParams, ToastController  } from 'ionic-angular';
import { SMS } from 'ionic-native';
/**
 * Generated class for the SmsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-sms',
  templateUrl: 'sms.html',
  providers: [SMS]
})
export class SmsPage {
  
  text = {
    "number": "", 
    "message": "",
  };
  constructor(private toastCtrl: ToastController,public navCtrl: NavController, public navParams: NavParams) {
  }

sendTextMessage() {
    SMS.send(this.text.number, this.text.message).then((result) => {
      let successToast = this.toastCtrl.create({
        message: "Text message sent successfully! :)",
        duration: 3000
      })
      successToast.present();
    }, (error) => {
      let errorToast = this.toastCtrl.create({
        message: "Text message not sent. :("+error+Error,
        duration: 3000
      })
      errorToast.present();
    });
 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SmsPage');
  }

}
