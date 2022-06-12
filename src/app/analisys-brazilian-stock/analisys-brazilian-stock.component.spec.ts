import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalisysBrazilianStockComponent } from './analisys-brazilian-stock.component';

describe('AnalisysBrazilianStockComponent', () => {
  let component: AnalisysBrazilianStockComponent;
  let fixture: ComponentFixture<AnalisysBrazilianStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalisysBrazilianStockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalisysBrazilianStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
