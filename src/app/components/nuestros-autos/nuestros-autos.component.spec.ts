import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestrosAutosComponent } from './nuestros-autos.component';

describe('NuestrosAutosComponent', () => {
  let component: NuestrosAutosComponent;
  let fixture: ComponentFixture<NuestrosAutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuestrosAutosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuestrosAutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
