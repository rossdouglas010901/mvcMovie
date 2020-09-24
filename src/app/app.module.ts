import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DetailsComponent } from './movies/details/details.component';
import { CreateComponent } from './movies/create/create.component';
import { ListComponent } from './movies/list/list.component';
import { NoAuthComponent } from './nav/no-auth/no-auth.component';
import { AuthComponent } from './nav/auth/auth.component';
import { AuthErrorComponent } from './error/auth-error/auth-error.component';
import { DbErrorComponent } from './error/db-error/db-error.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './signup/signup.component';
import { CommonService } from './common.service'; 
import { HttpClientModule } from '@angular/common/http';  
import { FormsModule } from '@angular/forms';

//Import Material Components
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DetailsComponent,
    CreateComponent,
    ListComponent,
    NoAuthComponent,
    AuthComponent,
    AuthErrorComponent,
    DbErrorComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CommonService],  
  bootstrap: [AppComponent] 
})
export class AppModule { }
