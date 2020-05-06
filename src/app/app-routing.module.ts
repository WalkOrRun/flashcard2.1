import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CreateSetComponent } from './create-set/create-set.component';
import { SingleCardComponent } from './single-card/single-card.component';
import { ViewSubjectComponent } from './view-subject/view-subject.component';

@NgModule({
  declarations: [ 
    LoginComponent, HomeScreenComponent, CreateAccountComponent, CreateSetComponent, 
    SingleCardComponent, ViewSubjectComponent
  ],
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

