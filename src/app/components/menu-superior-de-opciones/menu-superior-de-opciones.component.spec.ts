import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSuperiorDeOpcionesComponent } from './menu-superior-de-opciones.component';

describe('MenuSuperiorDeOpcionesComponent', () => {
  let component: MenuSuperiorDeOpcionesComponent;
  let fixture: ComponentFixture<MenuSuperiorDeOpcionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuSuperiorDeOpcionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuSuperiorDeOpcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
