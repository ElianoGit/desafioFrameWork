import { AfterViewInit, Component, OnDestroy } from "@angular/core";

import { PostData } from "src/@core/data/posts";
import { StateService } from "src/@core/utils/state.service";
import { ITableColumn } from "src/@theme/layout.component";

@Component({
    selector: "frk-posts",
    template: `<frk-layout [Columns]="columns"></frk-layout>`
})
export class PostsComponent implements AfterViewInit, OnDestroy {

    columns: ITableColumn = {view: ['id', 'title', 'body'],
                             cell: [{id: 'id', head: 'ID'},
                                    {id: 'title', head: 'TITLE'},
                                    {id: 'body', head: 'BODY'}]};

    constructor(private postDataService: PostData,
                private stateService: StateService) {
        this.stateService.setResourceState("Posts");
    }

    ngAfterViewInit(): void {
         this.postDataService.getPosts();
    }

    ngOnDestroy(): void {
        this.postDataService.dispose();    
    }
}