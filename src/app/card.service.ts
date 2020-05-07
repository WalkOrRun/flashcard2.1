import { Injectable } from '@angular/core';
import { Card } from './Card';
import { CardSet } from './Cardset';
import { CARDS } from './Mock-Quiz';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable()
export class CardService {

blankCards : Card[] = [ {
  cardID : 1,
  question : '',
  answer : '',
  marked : false,
  setID : 1
}];
cardsets : CardSet[] = [ {
  Card : this.blankCards,
  subject : '',
  accountname : '',
  setID : 1
}];

quizs = CARDS;
constructor(private http: HttpClient) { }
addCreatedCardSet(cardSet : CardSet) {
    //this.cardsets.push(cardSet);
    return this.http.post('https://flashcarddata-ad85d.firebaseio.com/'+'cardSet.json',cardSet);
}
// put all set observable in database to an array
getAllSetsObs() {
   return this.http.get<CardSet[]>('https://flashcarddata-ad85d.firebaseio.com/'+ 'cardSet.json')
    .pipe(map(responseData => {
      console.log(responseData);
      const setArray: CardSet[] = [];
      for(const key in responseData){
        setArray.push(responseData[key]);
      }
      return setArray;
    }))
}
// return all cardset to an array
getAllSets(){
  var setArray: CardSet[];
  this.getAllSetsObs().subscribe(data => {
      setArray = data;
    });
  return setArray;
}
// put all card observable in database to an array
getAllCardsObs(){
  return this.http.get<Card[]>('https://flashcarddata-ad85d.firebaseio.com/'+ 'card.json')
    .pipe(map(responseData => {
      console.log(responseData);
      const cardArray: Card[] = [];
      for(const key in responseData){
        cardArray.push(responseData[key]);
      }
      return cardArray;
    }))
}
//return all cards to an card
getAllCards(){
  var cardArray: Card[];
  this.getAllCardsObs().subscribe(data => {
      cardArray = data;
    });
  return cardArray;
}

// get new set id
getSetId(){
  return this.getAllSets.length +1;
}
// get new card id
getCardId(){
  return this.getAllCards.length+1;
}
//addQuizQuestion(quiz: Card) {
  //this.quizs.push(quiz);
//}
addQuizQuestion(card: Card){
    return this.http.post('https://flashcarddata-ad85d.firebaseio.com/'+'card.json',card);
}
//getQuizCards() {
//  return this.quizs;
//}

//get card set by setID
getCardSet(setID : number) {
  var setArray: CardSet[] = this.getAllSets()
  for(let set of setArray){
    if(set.setID==setID) return set;
  }
  return null;
  
}
removeCardSet(index : number) {
  this.cardsets.splice(index,1);
}
search(index : number, subject : string) {
      return subject === this.cardsets[index].subject;
}
}
