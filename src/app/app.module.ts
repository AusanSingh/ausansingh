import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms'
import { HttpModule }    from '@angular/http'


import { AppComponent }   from './app.component';
import { signupForm }   from './signup_form.component';
import { httpComponent }   from './http_test.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ AppComponent, signupForm, httpComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
