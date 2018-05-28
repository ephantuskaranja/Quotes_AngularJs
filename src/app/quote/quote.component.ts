import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote(1, 'all of me', 'epha', 'ephantus', new Date()),
    new Quote(2, 'what a man', 'cages', 'ephantus', new Date),
    new Quote(3, 'all of business', 'timephy', 'ephantus', new Date),
  ]
  toogleDetails(index) {
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }
  completeQuote(isComplete,index){
    if (isComplete){
        this.quotes.splice(index,1);
        }
        }

  constructor() { }

  ngOnInit() {
  }

}
