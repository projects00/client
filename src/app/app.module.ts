import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'

import {Routes,RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { ReportComponent } from './report/report.component';
const routes: Routes = [{
   path: 'app',
  component: AppComponent},
  {path: 'admin',
  component: AdminComponent,
    children : [
                { path: 'dashboard', component: AdmindashComponent },
                { path: 'report', component: ReportComponent} 
]}];

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AdmindashComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes),ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {



 }
