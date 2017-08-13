import { Component } from '@angular/core';
import { ChatsPage } from '../chats/chats'; 
import { AccountPage } from '../account/account';
import { UsersPage } from '../users/users';
import { HomePage } from '../home/home';
@Component({
	selector: 'tabs-page',
	templateUrl: 'tabs.html'
})
export class TabsPage {
	home = HomePage;
	chats = ChatsPage;
	users = UsersPage;
    profile = AccountPage;
}