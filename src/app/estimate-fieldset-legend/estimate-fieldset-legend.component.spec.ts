import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimateFieldsetLegendComponent } from './estimate-fieldset-legend.component';

describe('EstimateFieldsetLegendComponent', () => {
  let component: EstimateFieldsetLegendComponent;
  let fixture: ComponentFixture<EstimateFieldsetLegendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstimateFieldsetLegendComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstimateFieldsetLegendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
