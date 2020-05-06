import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CreateSetComponent } from './create-set/create-set.component';
import { SingleCardComponent } from './single-card/single-card.component';
import { ViewSubjectComponent } from './view-subject/view-subject.component';
import { Routes} from '@angular/router'; // CLI imports router

const routes: Routes = [
  { path: 'home-component', component: HomeScreenComponent },
  { path: 'login-component', component: LoginComponent },
]; // sets up routes constant where you define your Routes

@NgModule({
  
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'home', component: HomeScreenComponent }
      
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}


