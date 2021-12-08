import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrpComponent } from './frp.component';

describe('FrpComponent', () => {
  let component: FrpComponent;
  let fixture: ComponentFixture<FrpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
