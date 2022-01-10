import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

import { JSONPlaceHolderAPI, jsonPlaceHolder } from "src/@core/api/jsonplaceholder-api";
import { IResourceUser, UserData } from "src/@core/data/users";

@Injectable()
export class UserDataService extends UserData {

    constructor(private jsonPlaceHolderAPI: JSONPlaceHolderAPI<Array<IResourceUser>>) {
        super();
    }

    getUsers() {
        return this.jsonPlaceHolderAPI.apiGet<Array<IResourceUser>>(jsonPlaceHolder.user);
    }

}
