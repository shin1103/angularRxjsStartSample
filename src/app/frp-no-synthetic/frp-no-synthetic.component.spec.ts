import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrpNoSyntheticComponent } from './frp-no-synthetic.component';

describe('FrpNoSyntheticComponent', () => {
  let component: FrpNoSyntheticComponent;
  let fixture: ComponentFixture<FrpNoSyntheticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrpNoSyntheticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrpNoSyntheticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
