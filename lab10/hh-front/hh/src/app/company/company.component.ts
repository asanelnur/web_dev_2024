import { Component, OnInit } from '@angular/core';
import { Company } from '../models';
import { CompanyService } from '../company.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './company.component.html',
  styleUrl: './company.component.css'
})
export class CompanyComponent implements OnInit{
  companies!: Company[];
  loaded: boolean = false;
  constructor(private companyService: CompanyService){
  }

  ngOnInit(): void {
    this.getAlbums();
  }
  getAlbums() {
    this.loaded = false;
    this.companyService.getCompanies().subscribe((companies) => {
      this.companies = companies;
      this.loaded = true;
    })
  }
}
