import { Injectable } from "@angular/core";
import { Subscription } from "rxjs";

import { JSONPlaceHolderAPI, jsonPlaceHolder } from "src/@core/api/jsonplaceholder-api";
import { IResourceAlbum, AlbumData } from "src/@core/data/albums";
import { IResourceUser } from "src/@core/data/users";
import { StateService } from "src/@core/utils/state.service";

@Injectable()
export class AlbumDataService extends AlbumData {

    stateUserSubscription: Subscription;

    constructor(private jsonPlaceHolderAPI: JSONPlaceHolderAPI<Array<IResourceAlbum>>,
                private stateService: StateService) {
        super();
    }

    getAlbums() {        
        this.stateUserSubscription = this.stateService.onUserState()
            .subscribe((user: IResourceUser) => {
                this.jsonPlaceHolderAPI.fetchData(jsonPlaceHolder.album, user.id);
            }, (error: string) => alert(error));
    }

    dispose() {
        this.stateUserSubscription.unsubscribe();
        this.jsonPlaceHolderAPI.clearData();
    }
}
