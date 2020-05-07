import { Component, OnInit } from 
'@angular/core';
import { Card } from '../Card';
import { CardSet } from '../Cardset';
import {CardService} from '../card.service';
import { FormBuilder } from '@angular/forms';
import {LoginComponent} from '../login/login.component';
import {newCardSets} from '../newCardSets';
@Component({
  selector: 'app-create-set',
  templateUrl: './create-set.component.html',
  styleUrls: ['./create-set.component.css']
})
export class CreateSetComponent implements OnInit {
  constructor(private cardService : CardService, private fb : FormBuilder) { }
  cardBuilderForm = this.fb.group( {
    question : [''],
    answer: ['']
  })
  setid : number = this.cardService.getSetId();
   
  subjectForm = this.fb.group ( {
    subject : ['']
  })
  tempCard : Card[] = [];
  newCardSet : newCardSets = { 
    setID : this.setid,
    subject : '',
    accountname : LoginComponent.username
}
//Stores a card for editing
  cardStore : Card = {
    question : '',
    answer : '',
    marked : false,
    cardID : 1,
    setID : this.setid
  }
    blackCard : Card = {
    question : '',
    answer : '',
    marked : false,
    cardID : 1,
    setID : this.setid
  }
  cardSets: newCardSets[] = [];
  storeNum : number;
  editBoolean : boolean = true;
  addBoolean : boolean = false;
  cards : Card[] = [];
  


  addCard(question : string, answer : string) {
    this.tempCard.push({question, answer}as Card);
    this.cardBuilderForm.reset();
  }
  getCreatedCards() {
    try {
    for(let cardSet of this.cardService.getAllSets()) {
      if(LoginComponent.username === cardSet.accountname) {
        this.cardSets.push(cardSet);
      }
    }
    return this.cardSets;
    }
    catch(Exception) {

    }
  }
  changeSubject(subject: string) {
    this.newCardSet.subject = subject;
  }
  addNewCard(subjectS : string) {
    this.newCardSet = {
    subject : subjectS,
    accountname : LoginComponent.username,
    setID : this.setid
    }
    for(let card of this.tempCard) {
        this.cardService.addQuizQuestion(card as Card)
    }
    this.cardService.addCreatedCardSet(this.newCardSet);
    this.tempCard = []; 
    this.subjectForm.reset();
  }
  RemoveCard(index : number) {
    this.tempCard.splice(index, 1);
  }
  editCard(index : number, question: string, answer: string) {
        this.cardStore = this.tempCard[index];
        this.storeNum = index;
        this.editBoolean = false;
        this.addBoolean = true;       

  }
  getCardsMade() {
    return this.tempCard;
  }
  onSubmit() {
    console.warn(this.cardBuilderForm.value);    
  }
  onSubmit2() {
    console.warn(this.subjectForm.value);    
  }
  openSet() {
    
    
    
  }

  submitEdit(question : string, answer : string) {
    this.cardStore = {
    question : question,
    answer : answer,
    marked : false,
    cardID : this.cardService.getCardId(),
    setID : this.setid
    }
    this.tempCard[this.storeNum] = this.cardStore;
    this.editBoolean = true;
    this.cardStore = this.blackCard;
    this.storeNum = 0;
    this.addBoolean = false;
    this.cardBuilderForm.reset;
  }
  isTrue() {
    return this.editBoolean;
  }
  isEdit() {
    return this.addBoolean;
  }
  ngOnInit() {
  }
  
}
