import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { AppHeader }   from './components/header/header.component';
import { AboutSection }   from './components/aboutme/about.component';
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
    AppComponent,
    AppHeader,
    AboutSection
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
