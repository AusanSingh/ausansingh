import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms'

import { AppComponent }   from './app.component';
import { signupForm }   from './signup_form.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, signupForm ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
