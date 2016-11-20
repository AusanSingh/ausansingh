import { Component } from '@angular/core';
var styles = String(require('./css/styles.scss'));
@Component({
  selector: 'my-app',
  template: require('./profile/header.html'),
  styles: [styles]
})  
export class AppComponent { }
