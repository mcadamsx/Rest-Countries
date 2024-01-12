import { Injectable } from '@angular/core';
import { CountriesType } from './countries-type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CountriesServiceService {
  
  protected countriesList: CountriesType[] = [];

  constructor(private http: HttpClient) {}

  getAllCountries(): CountriesType[] {
    this.http.get<CountriesType[]>('assets/data.json').subscribe((data) => {
      this.countriesList = data;
      console.log(this.countriesList);
    });
    return this.countriesList;
  }

  getCountriesById(id: number): CountriesType | undefined {
    return this.countriesList.find((countries) => countries.id === id);
  }
}
