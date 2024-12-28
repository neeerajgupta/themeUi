import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-scrollpage-zoom',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './scrollpage-zoom.component.html',
  styleUrl: './scrollpage-zoom.component.scss'
})
export class ScrollpageZoomComponent {
  scale: number = 1; // Initial scale

  @HostListener('window:wheel', ['$event'])
  onScroll(event: WheelEvent) {
    if (event.deltaY < 0) {
       // Scroll down
       this.scale = Math.max(this.scale - 0.1, 0.05); 
   
    } else {
         // Scroll up
         this.scale = Math.min(this.scale + 0.1, 3); 
     
    }
    event.preventDefault(); 
  }

}
