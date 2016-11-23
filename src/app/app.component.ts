import { Component } from '@angular/core';
var styles = String(require('./css/styles.scss'));
@Component({
  selector: 'ausansingh',
  template: `
    <app-header></app-header>
    <about-section></about-section>
  
  `,
  styles: [styles]
})  
export class AppComponent { }
