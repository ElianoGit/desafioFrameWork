import { ModuleWithProviders, NgModule, Optional, SkipSelf } from "@angular/core";
import { CommonModule } from "@angular/common";
import { throwIfAlreadyLoaded } from "./module-import-guard";

import { AlbumData } from "./data/albums";
import { AlbumDataService } from "src/app/resources/albums/albums.service";

import { PostData } from "./data/posts";
import { PostDataService } from "src/app/resources/posts/posts.service";

import { TodoData } from "./data/todos";
import { TodosDataService } from "src/app/resources/todos/todos.service";

import { UserData } from "./data/users";
import { UserDataService } from "src/app/resources/users/users.service";

import { StateService } from "./utils/state.service";

const DATA_SERVICES = [
    { provide: AlbumData, useClass: AlbumDataService },
    { provide: PostData, useClass: PostDataService },
    { provide: TodoData, useClass: TodosDataService },
    { provide: UserData, useClass: UserDataService }
]

export const CORE_PROVIDERS = [    
    ... DATA_SERVICES,
    StateService
]

@NgModule({
    imports: [
        CommonModule
    ],
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule')
    }

    static forRoot(): ModuleWithProviders<CoreModule> {
        return {
            ngModule: CoreModule,
            providers: [
                ...CORE_PROVIDERS
            ]
        }
    }
}