import {NgModule} from '@angular/core';
import {NavbarComponent} from './components/navbar/navbar.component';
import {FooterComponent} from './components/footer/footer.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [],
  exports: [
    NavbarComponent,
    FooterComponent
  ]
})
export class CoreModule { }
