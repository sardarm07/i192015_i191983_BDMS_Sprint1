import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { DonorsTabAdminComponent } from './donors-tab-admin/donors-tab-admin.component';
import { HelpTabAdminComponent } from './help-tab-admin/help-tab-admin.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { PatientsTabAdminComponent } from './patients-tab-admin/patients-tab-admin.component';
import { SettingsTabAdminComponent } from './settings-tab-admin/settings-tab-admin.component';

const routes: Routes = [
  {
    path:'', redirectTo:'login-admin', pathMatch:'full'
  },
  {
    path: 'login-admin', component: LoginAdminComponent  
  },
  {
    path: 'dashboard-admin', component: DashboardAdminComponent
  },
  {
    path: 'donors-tab-admin', component: DonorsTabAdminComponent
  },
  {
    path: 'patients-tab-admin', component: PatientsTabAdminComponent
  },
  {
    path: 'settings-tab-admin', component: SettingsTabAdminComponent
  },
  {
    path: 'help-tab-admin', component: HelpTabAdminComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
