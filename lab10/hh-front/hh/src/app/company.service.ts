import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company, Vacancy } from './models';

@Injectable({
  providedIn: 'any'
})
export class CompanyService {
  BASE_URL: string = 'http://127.0.0.1:8000/api'
  constructor(private client: HttpClient) { }

  getCompanies(): Observable<Company[]> {
    return this.client.get<Company[]>(`${this.BASE_URL}/company/`)
  }

  getCompany(id: number): Observable<Company> {
    return this.client.get<Company>(`${this.BASE_URL}/company/${id}/`)
  }

  getCompanyVacancies(id:number): Observable<Vacancy[]> {
    return this.client.get<Vacancy[]>(`${this.BASE_URL}/company/${id}/vacancies/`)
  }
}
