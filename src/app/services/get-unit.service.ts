import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable } from 'rxjs';
import { UnitsResponse } from '../types/unit-response.interface';

@Injectable({
  providedIn: 'root'
})
export class GetUnitService {
  readonly apiUrl = "https://test-frontend-developer.s3.amazonaws.com/data/locations.json";

  constructor(private httpClient: HttpClient) { }

  getAllTnits(): Observable<UnitsResponse> {
      return this.httpClient.get<UnitsResponse>(this.apiUrl);
  }
}
