import { Component, Input } from '@angular/core';
import { CountriesType } from '../countries-type';
import { CommonModule } from '@angular/common';
import { CountriesComponent } from '../countries/countries.component';

@Component({
  selector: 'app-country',
  standalone: true,
  imports: [CountriesComponent, CommonModule],
  templateUrl: './country.component.html',
  styleUrl: './country.component.css'
})
export class CountryComponent {
  @Input()countryList! : CountriesType

}
