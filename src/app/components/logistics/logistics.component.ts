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
import { Router } from '@angular/router';
import { MeterGroupModule } from 'primeng/metergroup';
import { ChartModule } from 'primeng/chart';

import { TabViewModule } from 'primeng/tabview';
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
    AvatarModule,
    MeterGroupModule,
    ChartModule,TabViewModule

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

  value = [
    { label: 'On the way', color: '#f3f2f3', value: 39, time:"2hr 10min", icon:'pi pi-truck' },
    { label: 'Uploading', color: '#7367f0', value: 30, time:"3hr 30min", icon:'pi pi-arrow-circle-up'},
    { label: 'Loading', color: '#00bad1', value: 17, time:"4hr 00min", icon:'pi pi-arrow-circle-down'},
    { label: 'Wating', color: '#2f2b3d', value: 14, time:"5hr 02min", icon:'pi pi-clock'}
  ];
  colors = ['color1', 'color2', 'color3', 'color4', 'color5'];
  chartdata: any;
  options: any;
  delivery:any
  doughnut:any

  constructor(private service: AllServicesService,private rout:Router) { }

  ngOnInit(): void {
    this.customerData();
    this.chartedata();
    this.deliveryDATA();
    this.chartdataval()

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

  getcolor(index: number): string {
    return this.colors[index % this.colors.length]; // Cycle through colors
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

  onRowClick(event:any){
    this.rout.navigate(['/tabledata'], { state: { rowData: event } });
  }

  chartedata() {
    this.service.getChartData().subscribe(resp => {
      const rootStyle = getComputedStyle(document.documentElement);
  
      if (resp && Array.isArray(resp.data)) {
        this.chartdata = {
          labels: resp.labels || ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: resp.data.map((item: any) => ({
            type: item.type,
            label: item.label,
            borderColor: item.borderColor ? rootStyle.getPropertyValue(item.borderColor) : undefined,
            borderWidth: item.borderWidth || 1,
            borderRadius: item.borderRadius || 10,
            fill: item.fill || false,
            tension: item.tension || 0,
            backgroundColor: item.backgroundColor ? rootStyle.getPropertyValue(item.backgroundColor) : undefined,
            data: item.data || []
          }))
        };
      } else {
        console.error('Invalid response structure:', resp);
        this.chartdata = { labels: [], datasets: [] }; // Set empty chart data
      }
  
      console.log("Formatted Data:", this.chartdata);
    });
  }

  chartdataval(){
    const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');

        this.doughnut = {
            labels: ['Incorrect address', 'Weather conditions', 'Holidays'],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
                    hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
                }
            ]
        };


        this.options = {
            cutout: '60%',
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            }
        };
    }
  


  deliveryDATA() {
    this.service.getdeliveryData().subscribe(results => {
      console.log("deliveryDATA", results.data);
      this.delivery = results.data;
      
    });
  }
  
  
  



}
