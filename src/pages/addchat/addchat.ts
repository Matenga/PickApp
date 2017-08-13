import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user-provider/user-provider';
import { ChatsProvider } from '../../providers/chats-provider/chats-provider';
import { FirebaseListObservable } from 'angularfire2';
import { AngularFire } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ChatViewPage }  from '../chat-view/chat-view';
import { AuthProvider } from '../../providers/auth-provider/auth-provider';
import { Storage } from '@ionic/storage';


@Component({
    templateUrl: 'addchat.html'
})
export class AddchatsPage {
    users:FirebaseListObservable<any[]>;
    uid:string;
    info
    firstname
    lastname
    picture
    phonenumber
    key
   constructor(public nav: NavController, public userProvider: UserProvider, public af:AngularFire,public navParams: NavParams) {
     this.info = this.navParams.get('value')
     this.firstname = this.navParams.get('fname')
     this.lastname = this.navParams.get('lname')
     this.picture = this.navParams.get('picture')
     this.phonenumber = this.navParams.get('phonenumber')
     this.key = this.navParams.get('key')
    }
    ngOnInit() {
        this.userProvider.getUid()
        .then(uid => {
            this.uid = uid;
            this.users = this.userProvider.getAllUsers()
        });
    };
    
    openchatview(key,uid) {
        let param = {uid: this.uid, interlocutor: key};
        //this.nav.push(ChatViewPage,param);
        //this.userProvider.getUser();
         this.nav.push(ChatViewPage,param);
    }

    
   /*  
    chats:Observable<any[]>;
    constructor(public chatsProvider: ChatsProvider, 
        public userProvider: UserProvider, 
        public af:AngularFire, 
        public nav: NavController) {
            
            this.chatsProvider.getChats()
            .then(chats => {
                this.chats = chats.map(users => {
                    return users.map(user => {
                        user.info = this.af.database.object(`/users/${user.$key}`);
                        return user;
                    });
                });
            });
        }
    
  
    openChat(key) {
        this.userProvider.getUid()
        .then(uid => {
            let param = {uid: uid, interlocutor: key};
            this.nav.push(ChatViewPage,param);
        });   
    } */
}