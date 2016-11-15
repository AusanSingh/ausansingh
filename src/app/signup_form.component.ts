import { Component } from '@angular/core';

@Component({
    selector: 'signup-form',
    template: `
    <form (submit)="onSubmit()">
        <div class="form-group">
            <label>Email</label>
            <input type="email" class="form-control" [(ngModel)]="emailid" name="email" required>
        </div>
        <button type="submit" class="btn btn-primary btn-block" >Signup</button>
    </form>
    `


})

export class signupForm{ 
    emailid='';

    onSubmit(){
        console.log("Should Submit:", this.emailid);
    }

}