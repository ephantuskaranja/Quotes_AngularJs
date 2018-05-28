
import { Component } from '@angular/core';
import { Quote } from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
    quotes = [
        new Quote(1,'all of me', 'epha', 'ephantus'),
        new Quote(2,'what a man', 'cages', 'ephantus'),
        new Quote(3,'all of business', 'timephy', 'ephantus'),
    ]
}