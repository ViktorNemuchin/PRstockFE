import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductscatComponent } from './productscat.component';

describe('ProductscatComponent', () => {
  let component: ProductscatComponent;
  let fixture: ComponentFixture<ProductscatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductscatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductscatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
