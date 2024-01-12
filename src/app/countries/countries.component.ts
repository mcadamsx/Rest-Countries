import { Component, inject } from '@angular/core';
import { CountryComponent } from '../country/country.component';
import { CommonModule } from '@angular/common';
import { CountriesType } from '../countries-type';
import { CountriesServiceService } from '../countries-service.service';

@Component({
  selector: 'app-countries',
  standalone: true,
  imports: [CountryComponent, CommonModule],
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.css'
})
export class CountriesComponent {

  countryList: CountriesType[] = [];
  countryService: CountriesServiceService = inject (CountriesServiceService);
  constructor(){
    this.countryList = this.countryService.getAllCountries();
  }


}
