import { AfterViewInit, Component, Input, OnDestroy, ViewChild } from "@angular/core";
import { MatPaginator, MatTableDataSource } from "@angular/material";
import { Subscription } from "rxjs";
import { JSONPlaceHolderAPI } from "src/@core/api/jsonplaceholder-api";
import { IResourceAlbum } from "src/@core/data/albums";
import { IResourcePost } from "src/@core/data/posts";
import { IResourceToDo } from "src/@core/data/todos";

export type resType = IResourceAlbum | IResourcePost | IResourceToDo;

interface ITableCell {
    id: string
    head: string
}

export interface ITableColumn {
    view: Array<string>
    cell: Array<ITableCell>
}

@Component({
    selector: "frk-layout",
    templateUrl: "layout.component.html",
    styleUrls: ["layout.component.scss"]
})
export class LayoutComponent implements AfterViewInit, OnDestroy {

    @Input() Columns: ITableColumn;
    @ViewChild(MatPaginator, { static: false}) paginator: MatPaginator;

    dataSubscription: Subscription;
    matTableDataSource: MatTableDataSource<resType> = new MatTableDataSource()

    constructor(private dataService: JSONPlaceHolderAPI<resType>) {
        this.dataSubscription = this.dataService.getData()
            .subscribe((data: Array<resType>) => {
                this.matTableDataSource.data = data;
            });
    }

    ngAfterViewInit(): void {        
        this.matTableDataSource.paginator = this.paginator;        
    }

    ngOnDestroy(): void {
        this.dataSubscription.unsubscribe();
    }
}