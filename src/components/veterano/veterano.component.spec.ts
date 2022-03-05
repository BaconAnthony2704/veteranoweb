import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeteranoComponent } from './veterano.component';

describe('VeteranoComponent', () => {
  let component: VeteranoComponent;
  let fixture: ComponentFixture<VeteranoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeteranoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeteranoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
