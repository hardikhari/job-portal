import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AngularFireModule} from '@angular/fire/compat';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { HeadComponent } from './head/head.component';
import { HomeComponent } from './home/home.component';
import { AllJobsComponent } from './all-jobs/all-jobs.component';
import { FooterComponent } from './footer/footer.component';
import { BlogComponent } from './blog/blog.component';
import { JobsComponent } from './all-jobs/jobs/jobs.component';
import { DegreeComponent } from './all-jobs/degree/degree.component';
import { OtherComponent } from './all-jobs/other/other.component';
import { ForgotPasssswordComponent } from './component/forgot-passssword/forgot-passssword.component';
import { VerifyEmailComponent } from './component/verify-email/verify-email.component';
import { Form1Component } from './all-jobs/form1/form1.component';
import { Form2Component } from './all-jobs/form2/form2.component';
import { ApplicationComponent } from './application/application.component';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { environment } from '../environments/environment';



@NgModule({
  declarations: [

    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    HeadComponent,
    HomeComponent,
    AllJobsComponent,
    FooterComponent,
    BlogComponent,
    JobsComponent,
    DegreeComponent,
    OtherComponent,
    ForgotPasssswordComponent,
    VerifyEmailComponent,
    Form1Component,
    Form2Component,
    ApplicationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideDatabase(() => getDatabase()),
    provideFunctions(() => getFunctions()),
    provideStorage(() => getStorage()),
    provideFirestore(()=> getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
