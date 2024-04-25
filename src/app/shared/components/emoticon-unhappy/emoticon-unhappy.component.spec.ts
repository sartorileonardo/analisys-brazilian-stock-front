import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmoticonUnhappyComponent } from './emoticon-unhappy.component';

describe('EmoticonUnhappyComponent', () => {
  let component: EmoticonUnhappyComponent;
  let fixture: ComponentFixture<EmoticonUnhappyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmoticonUnhappyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmoticonUnhappyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
