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
import { IconComponent } from './components/presentation/icon/icon.component';
import { OverviewComponent } from './components/smart/overview/overview.component';
import { MarkdownModule } from 'ngx-markdown';
import { OverviewDetailComponent } from './components/presentation/overview-detail/overview-detail.component';
import { CapabilityLevelComponent } from './components/presentation/capability-level/capability-level.component';
import { LinkListComponent } from './components/presentation/link-list/link-list.component';
import { MaintainerListComponent } from './components/presentation/maintainer-list/maintainer-list.component';
import { CategoriesListComponent } from './components/presentation/categories-list/categories-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    HomeComponent,
    PageNotFoundComponent,
    IconComponent,
    OverviewComponent,
    OverviewDetailComponent,
    CapabilityLevelComponent,
    LinkListComponent,
    MaintainerListComponent,
    CategoriesListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ClarityModule,
    MarkdownModule.forRoot(),
    ReactiveFormsModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
