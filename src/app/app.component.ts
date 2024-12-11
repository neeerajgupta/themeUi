import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from "./layouts/sidebar/sidebar.component";
import { TopbarComponent } from "./layouts/topbar/topbar.component";
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { PanelMenuModule } from 'primeng/panelmenu';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ CommonModule,RouterOutlet, SidebarComponent, TopbarComponent,PanelMenuModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'themeUi';
}
