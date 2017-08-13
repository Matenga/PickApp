import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
//import { TabsPage } from '../tabs/tabs';
import { AngularFireDatabase } from 'angularfire2';
import { HomePage } from '../home/home';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { validateEmail } from '../../validators/email';
import { AuthProvider } from '../../providers/auth-provider/auth-provider';
import { UserProvider } from '../../providers/user-provider/user-provider';
import { UtilProvider } from '../../providers/utils';

@Component({
	templateUrl: 'signup.html'
})
export class SignupPage {
    signupForm:any;
    //loader: any;
    constructor(public nav:NavController,
    public afd: AngularFireDatabase,
      public auth: AuthProvider, 
      public userProvider: UserProvider,
      public util: UtilProvider,
      public loadingctrl: LoadingController,
      public storage:Storage) {
          //let loader = this.loadingctrl.create({content:'loading page'})
    }

   ngOnInit() {
        this.signupForm = new FormGroup({
            email: new FormControl("",[Validators.required, validateEmail]),
            fname:new FormControl("",Validators.required),
            lname:new FormControl("",Validators.required),
            password: new FormControl("",Validators.required),
            phonenumber: new FormControl("",Validators.required)
       });
   }
    
	/*signin() {
    let loader = this.loadingctrl.create({content:'loading...'})
    loader.present();
      this.auth.signin(this.loginForm.value)
      .then((data) => {
          this.storage.set('uid', data.uid);
          loader.dismiss();
          this.nav.push(HomePage);
            }, (error) => {
          loader.present();
          let alert = this.util.doAlert("Error",error.message,"Ok");
          alert.present();
          loader.dismiss();
      });
    }; */
    
      createAccount() {
          let loader = this.loadingctrl.create({content:'registering...'})
          loader.present();
      let credentials = this.signupForm.value;
        this.auth.createAccount(credentials)
        .then((data) => {
           this.storage.set('uid', data.uid);
           this.userProvider.createUser(credentials, data.uid);
              loader.dismiss();
               }, (error) => {
                    loader.present();
            let alert = this.util.doAlert("Error",error.message,"Ok");
            alert.present();
            loader.dismiss();
        });


        
     
    };
}