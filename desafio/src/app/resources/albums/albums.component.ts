import { AfterViewInit, Component, OnDestroy } from "@angular/core";

import { AlbumData } from "src/@core/data/albums";
import { StateService } from "src/@core/utils/state.service";
import { ITableColumn } from "src/@theme/layout.component";

@Component({
    selector: "frk-albums",
    template: `<frk-layout [Columns]="columns"></frk-layout>`
})
export class AlbumsComponent implements AfterViewInit, OnDestroy {

    columns: ITableColumn = {view: ['id', 'title'],
                             cell: [{id: 'id', head: 'ID'},
                                    {id: 'title', head: 'TITLE'}]};

    constructor(private albumDataService: AlbumData,
                private stateService: StateService) {
        this.stateService.setResourceState("Albums");
    }

    ngAfterViewInit(): void {        
        this.albumDataService.getAlbums();
    }

    ngOnDestroy(): void {
        this.albumDataService.dispose();  
    }
}