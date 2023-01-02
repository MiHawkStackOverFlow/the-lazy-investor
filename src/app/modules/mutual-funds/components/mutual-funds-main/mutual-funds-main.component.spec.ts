import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MutualFundsMainComponent } from './mutual-funds-main.component';

describe('MutualFundsMainComponent', () => {
  let component: MutualFundsMainComponent;
  let fixture: ComponentFixture<MutualFundsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MutualFundsMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MutualFundsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
