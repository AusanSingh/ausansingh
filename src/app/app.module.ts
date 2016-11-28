import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { AppHeader }   from './components/header/header.component';
import { AboutSection }   from './components/aboutme/about.component';
import { PortfolioComponent }   from './components/portfolio/portfolio.component';
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
    AppComponent,
    AppHeader,
    AboutSection,
    PortfolioComponent
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
