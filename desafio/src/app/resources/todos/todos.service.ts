import { Injectable } from "@angular/core";
import { Subscription } from "rxjs";

import { JSONPlaceHolderAPI, jsonPlaceHolder } from "src/@core/api/jsonplaceholder-api";
import { IResourceToDo, TodoData } from "src/@core/data/todos";
import { IResourceUser } from "src/@core/data/users";
import { StateService } from "src/@core/utils/state.service";

@Injectable()
export class TodosDataService extends TodoData {

    stateUserSubscription: Subscription;

    constructor(private jsonPlaceHolderAPI: JSONPlaceHolderAPI<Array<IResourceToDo>>,
                private stateService: StateService) {
        super();
    }

    getTodos() {
        this.stateUserSubscription = this.stateService.onUserState()
            .subscribe((user: IResourceUser) => {
                this.jsonPlaceHolderAPI.fetchData(jsonPlaceHolder.todo, user.id);
            }, (error: string) => alert(error));
    }

    dispose() {
        this.stateUserSubscription.unsubscribe();
        this.jsonPlaceHolderAPI.clearData();
    }
}
