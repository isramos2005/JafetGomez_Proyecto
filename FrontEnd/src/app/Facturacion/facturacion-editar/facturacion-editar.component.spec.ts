import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturacionEditarComponent } from './facturacion-editar.component';

describe('FacturacionEditarComponent', () => {
  let component: FacturacionEditarComponent;
  let fixture: ComponentFixture<FacturacionEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacturacionEditarComponent]
    });
    fixture = TestBed.createComponent(FacturacionEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
