import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-book-lists',
  templateUrl: './book-lists.component.html'
})

export class BookListsComponent{
  @Input() bgColor: string;
}
