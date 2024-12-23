import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Housinglocation } from '../home/housinglocation'; 
import { HousingService } from '../home/housing.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-details',
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {

  housingLocationid = -1;
  housingLocation: Housinglocation | undefined;

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

  constructor(private route: ActivatedRoute, private housingService: HousingService) {
    this.housingLocationid = Number(route.snapshot.params['id']);
    this.housingService.getHousingLocationById(this.housingLocationid)
      .subscribe((housingLocation) => {
        this.housingLocation = housingLocation;
      })

  }
  submitApplication() {
    this.housingService.submitApplication(this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? '');
  }
}
