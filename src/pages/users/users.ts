import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2';
import { UserProvider } from '../../providers/user-provider/user-provider';
import { ChatViewPage } from '../chat-view/chat-view';
import { AddchatsPage } from '../addchat/addchat';
import firebase from 'firebase';

@Component({
    templateUrl: 'users.html'
})
export class UsersPage {
    
    users:FirebaseListObservable<any[]>;
    uid:string;
    public countryList:Array<any>;
    public loadedUserList:Array<any>;
    public userRef:firebase.database.Reference;
    constructor(public nav: NavController, public userProvider: UserProvider) {
    
    this.userRef = firebase.database().ref('/users');
    this.userRef.on('value', users => {
      let allusers = [];
      users.forEach( user => {
        allusers.push(user.val());
        return false;
      });

      this.users = this.userProvider.getAllUsers();
      this.loadedUserList = allusers;
    });
    }

    ngOnInit() {
        this.userProvider.getUid()
        .then(uid => {
            this.uid = uid;
            this.users = this.userProvider.getAllUsers();
        });
    };
    
    openChat(fname,lname,email,picture,key) {
        let param = {uid: this.uid, interlocutor: key};
        //this.nav.push(ChatViewPage,param);
        //this.userProvider.getUser();
       this.nav.push(AddchatsPage,{
           'value':email,
           'fname':fname,
           'lname':lname,
           'picture':picture,
           'key':key,
           param
        });
          }


     findUsers(){

     }

   
}