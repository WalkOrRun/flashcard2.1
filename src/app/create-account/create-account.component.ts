import { Component, OnInit } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import {AccountService} from '../account.service';
import { Account} from '../Account';
@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  name:string;
  password:string;
  repassword:string;
  message:string;
  
  constructor(private accService: AccountService) { }

  ngOnInit() {
  }
  addNewAccount(){
    if(this.password!=this.repassword){
      this.message='password and Retyped password have to be the same';
      this.password = '';
      this.repassword = '';
      return;
    }
    const newAcc={
      name:this.name,
      password:this.password
    }
    this.accService.createAccount(newAcc).subscribe(data => {
      console.log(data);
      this.name='';
      this.password='';
      this.repassword='';
      this.message='New Account Successfully Created!';
      
    });
  }
}