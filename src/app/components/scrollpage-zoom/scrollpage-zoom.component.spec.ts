import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollpageZoomComponent } from './scrollpage-zoom.component';

describe('ScrollpageZoomComponent', () => {
  let component: ScrollpageZoomComponent;
  let fixture: ComponentFixture<ScrollpageZoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollpageZoomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScrollpageZoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
