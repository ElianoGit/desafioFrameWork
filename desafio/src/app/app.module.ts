import { NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule,
         MatIconModule,
         MatSidenavModule,
         MatMenuModule, 
         MatSelectModule} from '@angular/material';

import { CoreModule } from 'src/@core/core.module';
import { JSONPlaceHolderAPI } from 'src/@core/api/jsonplaceholder-api';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NgModel
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatMenuModule,
    MatSelectModule,
    CoreModule.forRoot()
  ],
  providers: [JSONPlaceHolderAPI],
  bootstrap: [AppComponent]
})
export class AppModule { }
