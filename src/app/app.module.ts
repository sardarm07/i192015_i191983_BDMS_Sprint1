import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { DonorsTabAdminComponent } from './donors-tab-admin/donors-tab-admin.component';
import { PatientsTabAdminComponent } from './patients-tab-admin/patients-tab-admin.component';
import { SettingsTabAdminComponent } from './settings-tab-admin/settings-tab-admin.component';
import { HelpTabAdminComponent } from './help-tab-admin/help-tab-admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DummyDonorService } from './service/dummy-donor.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardAdminComponent,
    LoginAdminComponent,
    DonorsTabAdminComponent,
    PatientsTabAdminComponent,
    SettingsTabAdminComponent,
    HelpTabAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [DummyDonorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
