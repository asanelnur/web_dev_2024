import { Component, OnInit } from '@angular/core';
import { Company, Vacancy } from '../models';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from '../company.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-company-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './company-detail.component.html',
  styleUrl: './company-detail.component.css'
})
export class CompanyDetailComponent implements OnInit{
  company!: Company;
  vacancies!: Vacancy[];
  loaded: boolean = false;
  constructor(private route: ActivatedRoute,
    private companyService: CompanyService
  ) {
  }

  ngOnInit(): void {
    this.getCompany();
  }

  getCompany(){
    this.route.paramMap.subscribe((params) => {
      const companyId = Number(params.get('id'));
      this.loaded = false;
      this.companyService.getCompany(companyId).subscribe((company) => {
        this.company = company;
      });
      this.companyService.getCompanyVacancies(companyId).subscribe((vacancies) => {
        this.vacancies = vacancies;
        this.loaded = true;
      });
    });
  }
}
