import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { AllServicesService } from '../../services/all-services.service';
import { HttpClientModule } from '@angular/common/http';
import { TagModule } from 'primeng/tag';
import { ProgressBar, ProgressBarModule } from 'primeng/progressbar';
import { Avatar, AvatarModule } from 'primeng/avatar';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { AccordionModule } from 'primeng/accordion';
import { BadgeModule } from 'primeng/badge';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-datatable',
  standalone: true,
  imports: [HttpClientModule, AvatarModule, CardModule, AccordionModule, BadgeModule, BreadcrumbModule, RouterModule],
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss'],
  providers: [AllServicesService]
})
export class DatatableComponent {
  rowData: any;
  items: any;

  home: MenuItem | undefined;

  constructor(private route: Router, private customerService: AllServicesService) { }

  ngOnInit(): void {
    this.rowData = history.state.rowData; 
    console.log('Received Row Data:', this.rowData);
    this.items = [{ icon: 'pi pi-star', route: '/logistic' },
      {
        label: 'Back To Dashboard',
        command: () => {
          this.route.navigate(['/logistic']); 
        }
      }
    
    
    ]

}

 



  

}
