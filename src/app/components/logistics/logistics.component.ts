import { Component, NgModule, OnInit } from '@angular/core';
import { Card, CardModule } from 'primeng/card';
import { PanelMenu, PanelMenuModule } from 'primeng/panelmenu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-logistics',
  standalone: true,
  imports: [CardModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule],
  templateUrl: './logistics.component.html',
  styleUrl: './logistics.component.scss'
})
export class LogisticsComponent implements OnInit {
  items:any
  ngOnInit(): void {
   
    this.items=[{
      label: '42',
      icon: 'pi pi-file',
      value:'On route vehicles',
      rate: 17.96,
      latestDate:'last week'
    },
    {
      label: '42',
      icon: 'pi pi-file',
      value:'On route vehicles',
      rate: 100,
      latestDate:'last week'
    },{
      label: '42',
      icon: 'pi pi-file',
      value:'On route vehicles',
      rate: 49.96,
      latestDate:'last week'
    },{
      label: '42',
      icon: 'pi pi-file',
      value:'On route vehicles',
      rate: 60.96,
      latestDate:'last week'
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
 

    
 
}
