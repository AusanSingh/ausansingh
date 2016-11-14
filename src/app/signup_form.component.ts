import { Component } from '@angular/core';

@Component({
    selector: 'signup-form',
    template: `
        <div class="form-group">
            <label>Email</label>
            <input type="text" class="form-control" [(ngModel)]="email">
        </div>
        <button type="submit" class="btn btn-primary btn-block" >Signup</button>
    `

})

export class signupForm{ 
    email='';

}