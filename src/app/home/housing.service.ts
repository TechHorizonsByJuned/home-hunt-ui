import { Injectable } from '@angular/core';
import { Housinglocation } from './housinglocation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  url = 'http://localhost:3000/locations';

  constructor(private http: HttpClient) {}

  getAllHousingLocation(): Observable<Housinglocation[]> {
      return this.http.get<Housinglocation[]>(this.url);
  }

  getHousingLocationById(id: number): Observable<Housinglocation | undefined> {
      return this.http.get<Housinglocation>(`${this.url}/${id}`);
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`,
    );
  }
}
