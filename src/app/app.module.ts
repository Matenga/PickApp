import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AngularFireModule, AuthProviders, AuthMethods} from 'angularfire2';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { UsersPage } from '../pages/users/users';
import { ChatsPage } from '../pages/chats/chats';
import { SmsPage} from '../pages/sms/sms';
import { AccountPage } from '../pages/account/account';
import { ChatViewPage } from '../pages/chat-view/chat-view';
import { HomePage } from '../pages/home/home';
import { AuthProvider } from '../providers/auth-provider/auth-provider';
import { ChatsProvider } from '../providers/chats-provider/chats-provider';
import { UserProvider } from '../providers/user-provider/user-provider';
import { UtilProvider } from '../providers/utils';
import { ContactsPage } from '../pages/contacts/contacts';
import { AddContactPage } from '../pages/add-contact/add-contact';
import { SignupPage } from '../pages/signup/signup';
import { AddchatsPage } from '../pages/addchat/addchat';
import { Ionic2RatingModule } from 'ionic2-rating';


export const firebaseConfig = {
  //apiKey: "AIzaSyC2gX3jlrBugfnBPugX2p0U1XiSqXhrRgQ",
  //authDomain: "chat-app-1e137.firebaseapp.com",
  //databaseURL: "https://chat-app-1e137.firebaseio.com",
  //storageBucket: "chat-app-1e137.appspot.com",
  
    apiKey: "AIzaSyBQNgpQZ6cDfEoa_Xg1odvs1n5kwj2Wz6w",
    authDomain: "chat-a492c.firebaseapp.com",
    databaseURL: "https://chat-a492c.firebaseio.com",
    projectId: "chat-a492c",
    storageBucket: "gs://chat-a492c.appspot.com",
    messagingSenderId: "854491417383"
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    LoginPage,
    UsersPage,
    ChatsPage,
    AccountPage,
    ChatViewPage,
    HomePage,
    SmsPage,
    ContactsPage,
    AddContactPage,
    SignupPage,
    AddchatsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig),
    Ionic2RatingModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    LoginPage,
    UsersPage,
    ChatsPage,
    AccountPage,
    ChatViewPage,
    HomePage,
    SmsPage,
    ContactsPage,
    AddContactPage,
    SignupPage,
    AddchatsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},
  AuthProvider, ChatsProvider, UserProvider, UtilProvider, Storage]
})
export class AppModule {}
