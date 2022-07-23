import { NgModule } from '@angular/core';
import { OutletContext, RouterModule, Routes } from '@angular/router';
import { AllJobsComponent } from './all-jobs/all-jobs.component';
import { DegreeComponent } from './all-jobs/degree/degree.component';
import { Form1Component } from './all-jobs/form1/form1.component';
import { Form2Component } from './all-jobs/form2/form2.component';
import { JobsComponent } from './all-jobs/jobs/jobs.component';
import { OtherComponent } from './all-jobs/other/other.component';
import { ApplicationComponent } from './application/application.component';
import { BlogComponent } from './blog/blog.component';
import { ForgotPasssswordComponent } from './component/forgot-passssword/forgot-passssword.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { VerifyEmailComponent } from './component/verify-email/verify-email.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'',redirectTo:"login", pathMatch:"full"},
  {path:"login",component:LoginComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"register",component:RegisterComponent},
  {path:"home",component:HomeComponent},
  {path:"all-jobs",component:AllJobsComponent,children:[
    {path:"degree",component:DegreeComponent},
    {path:"jobs",component:JobsComponent},
    {path:"other",component:OtherComponent},
  ]},
  {path:"blog",component:BlogComponent},
  {path:"forgot-passssword",component:ForgotPasssswordComponent},
  {path:"verify-email",component:VerifyEmailComponent},
  {path:"application",component:ApplicationComponent},
  {path:"form1",component:Form1Component},
  {path:"form2",component:Form2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
