import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material';

import { IResourceUser, UserData } from 'src/@core/data/users';
import { IMenuItem, MENU_ITENS } from './app-menu';

import { StateService } from 'src/@core/utils/state.service';
import { JSONPlaceHolderAPI } from 'src/@core/api/jsonplaceholder-api';
import { resType } from 'src/@theme/layout.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title: string = 'Desafio FrameWork';
  resource: string;
  menuItens: Array<IMenuItem> = MENU_ITENS;

  users: Array<IResourceUser>;
  userSelect: IResourceUser;

  @ViewChild(MatDrawer, {static: false}) drawer: MatDrawer;

  constructor(private usersData: UserData,
              private stateService: StateService,
              private dataService: JSONPlaceHolderAPI<resType>) {
    this.usersData.getUsers()
      .subscribe((data: Array<IResourceUser>) => {        
        this.users = data;
      });
    
    this.stateService.onResourceState()
      .subscribe((resource: string) => {
        this.resource = resource;
      });
    
    this.stateService.onUserState()
      .subscribe((user: IResourceUser) => {
        this.userSelect = user;
      });
  }

  onUserSelectChange() {
    this.dataService.clearData();
    this.stateService.setUserState(this.userSelect);
    this.drawer.close();
  }
}
