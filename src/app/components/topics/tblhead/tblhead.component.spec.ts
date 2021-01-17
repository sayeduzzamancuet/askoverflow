import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblheadComponent } from './tblhead.component';

describe('TblheadComponent', () => {
  let component: TblheadComponent;
  let fixture: ComponentFixture<TblheadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TblheadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TblheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
