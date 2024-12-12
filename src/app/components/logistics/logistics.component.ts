import { Component, NgModule, OnInit } from '@angular/core';
import { Card, CardModule } from 'primeng/card';
import { PanelMenu, PanelMenuModule } from 'primeng/panelmenu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



import { Table } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ProgressBar, ProgressBarModule } from 'primeng/progressbar';
import { ButtonModule } from 'primeng/button';
import { AllServicesService } from '../../services/all-services.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
  selector: 'app-logistics',
  standalone: true,
  imports: [CardModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    TagModule,
    ButtonModule,
    InputIconModule,
    IconFieldModule,
    TableModule,
    InputTextModule, ProgressBarModule,
    HttpClientModule,

  ],
  templateUrl: './logistics.component.html',
  styleUrl: './logistics.component.scss',
  providers: [AllServicesService, ProgressBar, Table],

})


export class LogisticsComponent implements OnInit {
  items: any
  customers: any
  customer: any









  constructor(private service: AllServicesService) { }

  ngOnInit(): void {
    // this.customerData()

    this.items = [{
      label: '42',
      icon: 'pi pi-file',
      value: 'On route vehicles',
      rate: 17.96,
      latestDate: 'last week'
    },
    {
      label: '42',
      icon: 'pi pi-file',
      value: 'On route vehicles',
      rate: 100,
      latestDate: 'last week'
    }, {
      label: '42',
      icon: 'pi pi-file',
      value: 'On route vehicles',
      rate: 49.96,
      latestDate: 'last week'
    }, {
      label: '42',
      icon: 'pi pi-file',
      value: 'On route vehicles',
      rate: 60.96,
      latestDate: 'last week'
    }
    ]
  }

  getClass(rate: number): string {
    if (rate <= 25) {
      return 'low';
    } else if (rate <= 50) {
      return 'medium';
    } else if (rate <= 75) {
      return 'normal';
    } else {
      return 'full';
    }
  }

  // customerData() {
  //   this.service.getTableData().subscribe(resp => {
  //     this.customers = resp;

  //     if (this.customers.data && Array.isArray(this.customers.data)) {
  //       this.customers.data.forEach((customer: { end_city: any; start_city: any; warnings: any; progress: any; }) => {
  //         this.customer = customer;
  //         // console.log("customer",this.customer);
  //         // console.log("customer",this.customer.id)

  //       });
  //     } else {
  //       console.log("No customer data found or data is not an array.");
  //     }

  //   }, error => {
  //     console.error('Error fetching data:', error);
  //   });
  // }



}
