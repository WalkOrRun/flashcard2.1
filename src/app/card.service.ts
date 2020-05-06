import { Injectable } from '@angular/core';
import { Card } from './Card';
import { CardSet } from './Cardset';
import { CARDS } from './Mock-Quiz';


@Injectable()
export class CardService {

blankCards : Card[] = [ {
  question : '',
  answer : '',
  marked : false,
  cardID : 1,
  setID : 1
}];
cardsets : CardSet[] = [ {
  Card : this.blankCards,
  subject : '',
  accountID : 1,
  setID : 1
}];

quizs = CARDS;
  constructor() { }
addCreatedCardSet(cardSet : CardSet) {
    this.cardsets.push(cardSet);
}
getMyCreatedSets() {
  return this.cardsets;
}
addQuizQuestion(quiz: Card) {
  this.quizs.push(quiz);
}
getQuizCards() {
  return this.quizs;
}
getCardSet(index : number) {
  return this.cardsets[index];
}
removeCardSet(index : number) {
  this.cardsets.splice(index,1);
}
search(index : number, subject : string) {
      return subject === this.cardsets[index].subject;
}
}
