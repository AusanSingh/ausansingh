import { Component } from '@angular/core';
import { httpServiceComponent } from './http_test.service';


@Component({
    selector: 'http-test',
    template: `
    <div class="col-md-6 col-md-offset-3">
        <button type="submit" class="btn btn-primary btn-block" 
        (click)="onTestGet()">Get DATA</button>
        <p>GetData: {{getData}}</p>
    </div>

    <form (submit)="onSubmit()">
        <div class="form-group">
            <label>Email</label>
            <input type="search" class="form-control" [(ngModel)]="cityName" name="city" required>
        </div>
        <button type="submit" class="btn btn-primary btn-block" >Signup</button>
    </form>
    `,
    providers:[httpServiceComponent]


})

export class httpComponent{ 
    getData:string;
    constructor (private _httpService: httpServiceComponent){}
    cityName='';
    onSubmit(){
      //  console.log("Should Submit:", this.cityName);
        this._httpService.getWeatherData(this.cityName)
        .subscribe(
            data=>{console.log(data.list[0].main.temp, data.list[0].weather[0].description, data.list[0].dt_txt)},
            error => alert(error),
                () => console.log("FInished")
        );
    }
    onTestGet(delhi){
        
    }

}