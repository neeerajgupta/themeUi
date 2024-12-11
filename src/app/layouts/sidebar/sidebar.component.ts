import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PanelMenu, PanelMenuModule } from 'primeng/panelmenu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { trigger, transition, style, animate } from '@angular/animations';
import { Router } from '@angular/router';
 

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [FormsModule, PanelMenuModule,CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',

  
})
export class SidebarComponent implements OnInit {
  items: any;

  ngOnInit() {
    this.items = [
      {
        label: 'Files',
        icon: 'pi pi-file',
        route:'/logistic',
        items: [
          {
            label: 'Documents',
            icon: 'pi pi-file',
            items: [
              {
                label: 'Invoices',
                icon: 'pi pi-file-pdf',
                items: [
                  {
                    label: 'Pending',
                    icon: 'pi pi-stop'
                  },
                  {
                    label: 'Paid',
                    icon: 'pi pi-check-circle'
                  }
                ]
              },
              {
                label: 'Clients',
                icon: 'pi pi-users'
              }
            ]
          },
          {
            label: 'Images',
            icon: 'pi pi-image',
            items: [
              {
                label: 'Logos',
                icon: 'pi pi-image'
              }
            ]
          }
        ]
      }
    ];
  }

  expend: boolean = true;
  clickEvent() {
    this.expend = !this.expend;
  }
}