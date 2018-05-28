import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote(1, 'all of me', 'epha', 'ephantus'),
    new Quote(2, 'what a man', 'cages', 'ephantus'),
    new Quote(3, 'all of business', 'timephy', 'ephantus'),
  ]
  toogleDetails(index) {
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }

  constructor() { }

  ngOnInit() {
  }

}
