import { Injectable } from "@angular/core";
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class httpServiceComponent{
    constructor (private _http: Http){}
    countryName:string;
    cityName:string;
    getWeatherData(cityName){
        return this._http.get('http://api.openweathermap.org/data/2.5/forecast?q='+cityName+'&apikey=90c0b7108225d3888092dd0f16a3e869')
                .map(res => res.json())
    }
}
//90c0b7108225d3888092dd0f16a3e869