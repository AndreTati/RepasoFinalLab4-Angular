import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDeOpcionesComponent } from './menu-de-opciones.component';

describe('MenuDeOpcionesComponent', () => {
  let component: MenuDeOpcionesComponent;
  let fixture: ComponentFixture<MenuDeOpcionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuDeOpcionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuDeOpcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
