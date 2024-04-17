import { Routes } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';

export const routes: Routes = [
  {path: '', redirectTo: 'company', pathMatch: 'full'},
  {path: 'company', component: CompanyComponent, title: 'Companies'},
  {path: 'company/:id', component: CompanyDetailComponent, title: 'Company Detail'},
];
