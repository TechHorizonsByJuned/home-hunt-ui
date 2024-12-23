import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { Housinglocation } from './housinglocation';
import { HousingService } from './housing.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, HttpClientModule, HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  housingService: HousingService = inject(HousingService);

  housingLocationList: Housinglocation[] = [];

  filteredHouseLocationList: Housinglocation[] = [];

  constructor() {

   
  }
  ngOnInit(): void {
    this.housingService.getAllHousingLocation()
      .subscribe((housingLocationList: Housinglocation[]) => {
        this.housingLocationList = housingLocationList; this.filteredHouseLocationList = housingLocationList;
      });
    console.table("data= " + this.housingLocationList);
  }



  filteredResults(text: string) {
    if (!text) {
      this.filteredHouseLocationList = this.housingLocationList;
      return;
    }
    // The filteredLocationList hold the values that match the search criteria entered by the user.
    this.filteredHouseLocationList = this.housingLocationList.filter((housingLocation) => {
      return housingLocation?.city.toLowerCase().includes(text.toLowerCase());
    });
  }

}