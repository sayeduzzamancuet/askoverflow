import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {TopicsComponent} from './components/topics/topics.component';
import {AuthGuard} from './auth.guard';
import {AddComponent} from './components/topics/add/add.component';
import {CompanyComponent} from './components/topics/company/company.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: LoginComponent },
  {path: 'login', pathMatch: 'full', component: LoginComponent },
  {path: 'register', pathMatch: 'full', component: RegisterComponent},
  {path: 'topics', pathMatch: 'full', component: TopicsComponent, canActivate: [AuthGuard]},
  {path: 'topics/add', pathMatch: 'full', component: AddComponent, canActivate: [AuthGuard]},
  {path: 'topics/companies', pathMatch: 'full', component: CompanyComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
