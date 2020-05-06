import { Component } from '@angular/core';
import { Subject } from "rxjs/Subject";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";
export type RouteTo = 'create' | 'indiviual' | 'list' | 'login';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  routing : RouteTo = 'login';
  userLoggedin = document.cookie;

  get showCreate() {
    return this.routing === 'create';
  }
  get showIndiviual() {
    return this.routing === 'indiviual';
  }
  get showList() {
    return this.routing=== 'list';
  }

  get showLogin() {
    return this.routing === 'login';
  }

  toggleEditor(type: RouteTo) {
    this.routing = type;
  }
  /* Code taken from https://itnext.io/angular-code-design-for-responsive-websites-acd4259a478c
    Allows my web page to auto initialize on mobile and on the website
    used thier code to make sure it worked on mobile*/
    private isMobile = new Subject();
    public screenWidth: string;


    constructor() {
        this.checkWidth();
    }

    onMobileChange(status: boolean) {
        this.isMobile.next(status);
    }

    getMobileStatus(): Observable<any> {
        return this.isMobile.asObservable();
    }

    public checkWidth() {
        var width = window.innerWidth;
        if (width <= 768) {
            this.screenWidth = 'sm';
            this.onMobileChange(true);
        } else if (width > 768 && width <= 992) {
            this.screenWidth = 'md';
            this.onMobileChange(false);
        } else {
            this.screenWidth = 'lg';
            this.onMobileChange(false);
        }
    } 
    /* End of code fragment that helps us auto intialize the web page */ 
}
