import { Component, OnInit } from '@angular/core';
import { CoronavirusService } from 'src/app/services/coronavirus.service';

@Component({
  selector: 'app-coronavirus',
  templateUrl: './coronavirus.component.html',
  styleUrls: ['./coronavirus.component.scss']
})
export class CoronavirusComponent implements OnInit {

  covid19GlobalDate: any;
  covid19Angola: any;
  covid19AllCountry: any[] = [];
  allCountries = [];

  public show: number = -1;

  constructor(private coronavirusService: CoronavirusService) { }

  ngOnInit(): void {
    this.coronavirusService.getCovidGlobalDate().subscribe(resp => {
      this.covid19GlobalDate = resp;
    });

    this.coronavirusService.getCovidAngola().subscribe(res => {
      this.covid19Angola = res;
    });

    this.coronavirusService.getCovidGettAllDate().subscribe(resp => {
      this.covid19AllCountry = resp;
    });

  }


  clicked(index: number){
    this.show = index;
  };

  closeToggle() {
    this.show = -1;
  };

  toggleDisplay() {
    this.show = 10000;
  };


}
