import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PregistroComponent } from './pregistro.component';

describe('PregistroComponent', () => {
  let component: PregistroComponent;
  let fixture: ComponentFixture<PregistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PregistroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PregistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
