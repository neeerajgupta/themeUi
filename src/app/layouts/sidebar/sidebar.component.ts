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

  constructor(private route:Router){}
  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        command: () => {
          this.route.navigate(['/']);
        }
      },
      {
        label: 'Dashbord',
        icon: 'pi pi-star',
        command: () => {
          this.route.navigate(['/logistic']);
        }
      },
      {
        label: 'Projects',
        icon: 'pi pi-search',
        items: [
          {
            label: 'Components',
            icon: 'pi pi-bolt'
          },
          {
            label: 'Blocks',
            icon: 'pi pi-server'
          },
          {
            label: 'UI Kit',
            icon: 'pi pi-pencil'
          },
          {
            label: 'Templates',
            icon: 'pi pi-palette',
            items: [
              {
                label: 'Apollo',
                icon: 'pi pi-palette'
              },
              {
                label: 'Ultima',
                icon: 'pi pi-palette'
              }
            ]
          }
        ]
      },
      {
        label: 'Contact',
        icon: 'pi pi-envelope',
        command: () => {
          this.route.navigate(['/tabledata']);
        }
      }
    ]
  }

  expend: boolean = true;
  clickEvent() {
    this.expend = !this.expend;
  }
}