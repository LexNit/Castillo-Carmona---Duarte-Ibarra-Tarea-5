import { ComponentsModule } from './components/components.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
//import { CameraPage } from './camera/camera.page';

import { SQLite } from '@ionic-native/sqlite/ngx';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';

@NgModule({
  declarations: [AppComponent,], //CameraPage],
  entryComponents: [],//[CameraPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ComponentsModule, HttpClientModule],
  providers: [ 
    SQLite,
    SQLitePorter,
    { 
      provide: RouteReuseStrategy, 
      useClass: IonicRouteStrategy 
    }],
  bootstrap: [AppComponent],
})
export class AppModule {}
