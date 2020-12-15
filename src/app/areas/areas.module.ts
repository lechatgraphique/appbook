import {NgModule} from '@angular/core';
import {BookListsComponent} from './book-lists/components/book-lists.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [BookListsComponent],
  imports: [
    CommonModule
  ],
  exports: [BookListsComponent]
})

export class AreasModule { }
