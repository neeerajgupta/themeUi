import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { AllServicesService } from '../../services/all-services.service';
import { HttpClientModule } from '@angular/common/http';
import { TagModule } from 'primeng/tag';
import { ProgressBar, ProgressBarModule } from 'primeng/progressbar';
import { Avatar, AvatarModule } from 'primeng/avatar';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-datatable',
  standalone: true,
  imports: [ HttpClientModule, AvatarModule],
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss'],
  providers: [AllServicesService]
})
export class DatatableComponent {
  rowData: any;

  constructor(private route: ActivatedRoute,private customerService:AllServicesService) {}

  ngOnInit(): void {
    this.rowData = history.state.rowData; // Access the passed data
    console.log('Received Row Data:', this.rowData);
   
  }

 



  

}
