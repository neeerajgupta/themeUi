import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { AllServicesService } from '../../services/all-services.service';
import { HttpClientModule } from '@angular/common/http';
import { TagModule } from 'primeng/tag';
import { ProgressBar, ProgressBarModule } from 'primeng/progressbar';
import { Avatar, AvatarModule } from 'primeng/avatar';
@Component({
  selector: 'app-datatable',
  standalone: true,
  imports: [TableModule, HttpClientModule, TagModule,ProgressBarModule,AvatarModule],
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss'],
  providers: [AllServicesService]
})
export class DatatableComponent {
  customers: any;
  customer: any[] = [];
  loading: boolean = true;
  statuses!: any[];

  constructor(private service: AllServicesService) { }

  ngOnInit() {
    this.customerData();
   
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
