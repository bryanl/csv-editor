import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { UploadComponent } from './components/smart/upload/upload.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/smart/home/home.component';
import { PageNotFoundComponent } from './components/smart/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ClarityModule,
    ReactiveFormsModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
