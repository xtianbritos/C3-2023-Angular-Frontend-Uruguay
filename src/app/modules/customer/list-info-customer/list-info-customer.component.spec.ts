import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInfoCustomerComponent } from './list-info-customer.component';

describe('ListInfoCustomerComponent', () => {
  let component: ListInfoCustomerComponent;
  let fixture: ComponentFixture<ListInfoCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListInfoCustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListInfoCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
