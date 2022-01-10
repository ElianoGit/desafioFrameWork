import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule,
         MatIconModule,
         MatTableModule,
         MatPaginatorModule,
         MatSidenavModule,
         MatMenuModule, 
         MatProgressSpinnerModule,
         MatSelectModule} from '@angular/material';

import { CoreModule } from 'src/@core/core.module';
import { JSONPlaceHolderAPI } from 'src/@core/api/jsonplaceholder-api';

import { AppRoutingModule } from './app-routing.module';

import { LayoutComponent } from 'src/@theme/layout.component';
import { AlbumsComponent } from './resources/albums/albums.component';
import { PostsComponent } from './resources/posts/posts.component';
import { TodosComponent } from './resources/todos/todos.component';

@NgModule({
  declarations: [
    AppComponent,
    NgModel,
    LayoutComponent,
    AlbumsComponent,
    PostsComponent,
    TodosComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    CoreModule.forRoot()
  ],
  providers: [JSONPlaceHolderAPI],
  bootstrap: [AppComponent]
})
export class AppModule { }
