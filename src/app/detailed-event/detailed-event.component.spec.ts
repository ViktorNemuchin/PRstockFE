import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedEventComponent } from './detailed-event.component';

describe('DetailedEventComponent', () => {
  let component: DetailedEventComponent;
  let fixture: ComponentFixture<DetailedEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailedEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
