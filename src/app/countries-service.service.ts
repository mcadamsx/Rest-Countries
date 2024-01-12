import { Injectable } from '@angular/core';
import { CountriesType } from './countries-type';

@Injectable({
  providedIn: 'root',
})
export class CountriesServiceService {
  readonly baseUrl = 'https://angular.dev/assets/tutorials/common';

  protected countriesList: CountriesType[] = [
    {
      id: 1,
      name: 'Eritrea',
      porpulation: 5352000,
      region: "Africa" ,
      capital: "Asmara",
      photo: "https://flagcdn.com/w320/er.png",
    },
    {
      id: 1,
      name: 'Estonia',
      porpulation: 1331057,
      region: "Europe" ,
      capital: "Tallinn",
      photo: "https://flagcdn.com/w320/ee.png",
    },
    {
      id: 1,
      name: 'Ethiopia',
      porpulation: 114963583,
      region: "Africa" ,
      capital: "Addis Ababa",
      photo: "https://flagcdn.com/w320/et.png",
    },
   
    {
      id: 1,
      name: 'Falkland Islands (Malvinas)',
      porpulation: 2563,
      region: "South America" ,
      capital: "Stanley",
      photo: "https://flagcdn.com/fk.svg",
    },
   
    {
      id: 1,
      name: 'Faroe Islands',
      porpulation: 48865,
      region: "Europe" ,
      capital: "Tórshavn",
      photo: "https://flagcdn.com/fo.svg",
    },
   
    {
      id: 1,
      name: 'Fiji',
      porpulation: 5352000,
      region: "Oceania" ,
      capital: "Suva",
      photo: "https://flagcdn.com/fj.svg",
    },
   
   
   
  ];

  constructor() {}

  getAllCountries(): CountriesType[] {
    return this.countriesList;
  }
  getCountriesById(id: Number): CountriesType | undefined {
    return this.countriesList.find((countries) => countries.id === id);
  }
}
