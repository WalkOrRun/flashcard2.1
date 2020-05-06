import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LoginComponent } from './login/login.component';
import { CreateSetComponent } from './create-set/create-set.component';
import { SetService } from './set.service';
import { CardService } from './card.service';
import { AccountService } from './account.service';
import { ViewSubjectComponent } from './view-subject/view-subject.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import {SingleCardComponent} from './single-card/single-card.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule,HttpClientModule,AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, LoginComponent, CreateSetComponent, ViewSubjectComponent, CreateAccountComponent, SingleCardComponent, HomeScreenComponent ],
  bootstrap:    [ AppComponent ],
  providers: [SetService, CardService, AccountService]
})
export class AppModule { }
