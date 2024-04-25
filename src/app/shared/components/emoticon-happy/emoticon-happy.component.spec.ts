import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmoticonHappyComponent } from './emoticon-happy.component';

describe('EmoticonHappyComponent', () => {
  let component: EmoticonHappyComponent;
  let fixture: ComponentFixture<EmoticonHappyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmoticonHappyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmoticonHappyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
