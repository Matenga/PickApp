import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Storage } from '@ionic/storage';
import { Camera } from 'ionic-native';

@Injectable()
export class UserProvider {
    users:FirebaseListObservable<any[]>;
    constructor(public af: AngularFire, public local: Storage ) { }
  
  // Get Current User's UID
  getUid() {
    return this.local.get('uid');
  }
  
  // Create User in Firebase
  createUser(userCredentails, uid) {
      let currentUserRef = this.af.database.object(`/users/${uid}`);
      console.log(userCredentails);
      currentUserRef.set({email: userCredentails.email,fname: userCredentails.fname,lname: userCredentails.lname,phonenumber: userCredentails.phonenumber});
  }
  
  // Get Info of Single User
  getUser() {
    // Getting UID of Logged In User
    return this.getUid().then(uid => {
      return this.af.database.object(`/users/${uid}`);
    });
  }
getByID(key){
 /* for(var x =0; x<(this.users).length; x++){
    if(this.users[x].key == key){
      return Promise.resolve(this.users[x]);
    } */
  this.users = this.af.database.list('/users');
   this.users.forEach(element => {
            console.log(element);
        });

 
}  
  
  // Get All Users of App
  getAllUsers() {
      return this.af.database.list('/users');
      
  }
 
   
  // Get base64 Picture of User
  getPicture() {
      let base64Picture;
      let options = {
          destinationType: 0,
          sourceType: 0,
          encodingType:0  
      };
      
      let promise = new Promise((resolve, reject) => {
           Camera.getPicture(options).then((imageData) => {
                base64Picture = "data:image/jpeg;base64," + imageData;
                resolve(base64Picture);
            }, (error) => {
                reject(error);
          });
      
      });
      return promise;
  }
  
  // Update Provide Picture of User
  updatePicture() {
    this.getUid().then(uid => {
      let pictureRef = this.af.database.object(`/users/${uid}/picture`);
      this.getPicture()
      .then((image) => {
          pictureRef.set(image);
      });
    });
  }
}

