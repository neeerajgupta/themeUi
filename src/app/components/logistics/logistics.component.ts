import { Component,  OnInit } from '@angular/core';
import {  CardModule } from 'primeng/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ProgressBarModule } from 'primeng/progressbar';
import { ButtonModule } from 'primeng/button';
import { AllServicesService } from '../../services/all-services.service';
import {HttpClientModule } from '@angular/common/http';
import { AvatarModule } from 'primeng/avatar';
@Component({
  selector: 'app-logistics',
  standalone: true,
  imports: [
    CardModule,
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
    AvatarModule

  ],
  templateUrl: './logistics.component.html',
  styleUrl: './logistics.component.scss',
  providers: [AllServicesService,],

})


export class LogisticsComponent implements OnInit {
  items: any
  customers: any;
  customer: any[] = [];
  loading: boolean = true;
  statuses!: any[];

  constructor(private service: AllServicesService) { }

  ngOnInit(): void {
    this.customerData()

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

  customerData() {
    this.service.getData().subscribe(resp => {
      this.customers = resp;
      if (this.customers.data && Array.isArray(this.customers.data)) {
        this.customer = this.customers.data;
        console.log("customers", this.customer);
      } else {
        console.log("No customer data found or data is not an array.");
      }
    }, error => {
      console.error('Error fetching data:', error);
    });
  }
  getSeverity(status: string) {
    switch (status.toLowerCase()) {
      case 'danger':
        return 'danger';
      case 'success':
        return 'success';
      case 'info':
        return 'info';
      case 'warning':
        return 'warning';
      default:
        return 'secondary'; 
    }
  }



}
