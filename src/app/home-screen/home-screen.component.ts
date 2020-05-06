import { Component, OnInit, Input } from '@angular/core';
import { AccountService } from '../account.service';
import { Account } from '../Account';
import { CardService } from '../card.service';
import { Card } from '../Card';
import { CardSet } from '../Cardset';
import { FormBuilder } from '@angular/forms';
import { NgIf } from '@angular/common';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
export type RouteTo = 'create' | 'indiviual' | 'list' | 'login';


@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit {

   routing : RouteTo;
  toggleEditor(type: RouteTo) {
    this.routing = type;
  }
  

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
  ngOnInit() {
   
  }

  

 

  
}