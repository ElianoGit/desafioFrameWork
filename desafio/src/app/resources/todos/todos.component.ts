import { AfterViewInit, Component, OnDestroy } from "@angular/core";

import { TodoData } from "src/@core/data/todos";
import { StateService } from "src/@core/utils/state.service";
import { ITableColumn } from "src/@theme/layout.component";

@Component({
    selector: "frk-todos",
    template: `<frk-layout [Columns]="columns"></frk-layout>`
})
export class TodosComponent implements AfterViewInit, OnDestroy {

    columns: ITableColumn = {view: ['id', 'title', 'completed'],
                             cell: [{id: 'id', head: 'ID'},
                                    {id: 'title', head: 'TITLE'},
                                    {id: 'completed', head: 'COMPLETED'}]};

    constructor(private todoDataService: TodoData,
                private stateService: StateService) {
        this.stateService.setResourceState("ToDos");
    }

    ngAfterViewInit(): void {        
        this.todoDataService.getTodos();
    }

    ngOnDestroy(): void {
        this.todoDataService.dispose();
    }
}