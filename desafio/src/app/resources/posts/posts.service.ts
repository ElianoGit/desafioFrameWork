import { Injectable } from "@angular/core";
import { Subscription } from "rxjs";

import { JSONPlaceHolderAPI, jsonPlaceHolder } from "src/@core/api/jsonplaceholder-api";
import { IResourcePost, PostData } from "src/@core/data/posts";
import { IResourceUser } from "src/@core/data/users";
import { StateService } from "src/@core/utils/state.service";

@Injectable()
export class PostDataService extends PostData {

    stateUserSubscription: Subscription;

    constructor(private jsonPlaceHolderAPI: JSONPlaceHolderAPI<Array<IResourcePost>>,
                private stateService: StateService) {
        super();
    }
    
    getPosts() {        
        this.stateUserSubscription = this.stateService.onUserState()
            .subscribe((user: IResourceUser) => {
                this.jsonPlaceHolderAPI.fetchData(jsonPlaceHolder.post, user.id);
            }, (error: string) => alert(error));
    }

    dispose() {
        this.stateUserSubscription.unsubscribe();
        this.jsonPlaceHolderAPI.clearData();
    }
}
