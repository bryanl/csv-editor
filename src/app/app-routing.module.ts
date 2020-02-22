import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadComponent } from './components/smart/upload/upload.component';
import { HomeComponent } from './components/smart/home/home.component';
import { PageNotFoundComponent } from './components/smart/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'upload', component: UploadComponent },
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
