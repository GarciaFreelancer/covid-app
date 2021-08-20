import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CoronavirusService {

  private API_COVID19_DATA = "https://corona.lmao.ninja/v2/all";

  private API_COVID19_ANGOLA = "https://corona.lmao.ninja/v2/countries/Angola";

  private API_COVID19_All_COUNTRIES = "https://corona.lmao.ninja/v2/countries?sort=cases";


   
  constructor(private http: HttpClient) { }

  public getCovidGlobalDate(): Observable<any> { 
    return this.http.get(this.API_COVID19_DATA);
  }

  public getCovidAngola(): Observable<any> { 
    return this.http.get(this.API_COVID19_ANGOLA);
  }

  public getCovidGettAllDate(): Observable<any> { 
    return this.http.get(this.API_COVID19_All_COUNTRIES);
  }

}
