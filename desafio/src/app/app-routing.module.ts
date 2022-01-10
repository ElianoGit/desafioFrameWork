import { NgModule } from "@angular/core";

import { BrowserModule } from '@angular/platform-browser';

import { MatPaginatorModule, MatProgressSpinnerModule, MatTableModule } from "@angular/material";
import { ExtraOptions, RouterModule, Routes } from "@angular/router";

import { LayoutComponent } from 'src/@theme/layout.component';

import { AlbumsComponent } from "./resources/albums/albums.component";
import { PostsComponent } from "./resources/posts/posts.component";
import { TodosComponent } from "./resources/todos/todos.component";

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

const config: ExtraOptions = {
    useHash: false,
}

@NgModule({
    imports: [
        RouterModule.forRoot(routes, config),
        MatProgressSpinnerModule,
        MatTableModule,        
        MatPaginatorModule,
        BrowserModule],
    declarations: [
        LayoutComponent,
        AlbumsComponent,
        PostsComponent,
        TodosComponent
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}