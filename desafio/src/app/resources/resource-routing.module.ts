import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatPaginatorModule, MatProgressSpinnerModule, MatTableModule } from "@angular/material";
import { RouterModule, Routes } from "@angular/router";

import { LayoutComponent } from 'src/@theme/layout.component';

import { AlbumsComponent } from "./albums/albums.component";
import { PostsComponent } from "./posts/posts.component";
import { TodosComponent } from "./todos/todos.component";

export const routes: Routes = [
    {
        path: 'albums',
        component: AlbumsComponent
    },
    {
        path: 'posts',
        component: PostsComponent
    },
    {
        path: 'todos',
        component: TodosComponent
    },
    { path: '', redirectTo: 'albums', pathMatch: 'full'},
    { path: '**', redirectTo: 'albums'}
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatProgressSpinnerModule,
        MatTableModule,        
        MatPaginatorModule],
    declarations: [
        LayoutComponent,
        AlbumsComponent,
        PostsComponent,
        TodosComponent
    ],
    exports: [RouterModule]
})
export class ResourceRoutingModule {

}