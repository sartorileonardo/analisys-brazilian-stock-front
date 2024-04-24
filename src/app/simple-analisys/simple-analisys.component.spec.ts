import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleAnalisysComponent } from './simple-analisys.component';

describe('SimpleAnalisysComponent', () => {
  let component: SimpleAnalisysComponent;
  let fixture: ComponentFixture<SimpleAnalisysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleAnalisysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleAnalisysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
