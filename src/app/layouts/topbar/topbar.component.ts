import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent implements OnInit {
  
  items: any

  constructor(private router: Router) {}
  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/',
        routerLinkActiveOptions: { exact: true }
      },
      {
        label: 'Dashbord',
        icon: 'pi pi-star',
        // command: () => {
        //   this.router.navigate(['/logistic']);
        // },
        routerLink: '/logistic',
        routerLinkActiveOptions: { exact: true }
      },
      {
        label: 'Scroll',
        icon: 'pi pi-gauge',
        routerLink: '/scrollPage',
        routerLinkActiveOptions: { exact: true }
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
        label: 'Vehicles Data',
        icon: 'pi pi-sitemap',
        command: () => {
          this.router.navigate(['/tabledata']);
        }
      }
    ]
  }


}
