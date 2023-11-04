import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JornadasComponent } from './jornadas.component';

describe('JornadasComponent', () => {
  let component: JornadasComponent;
  let fixture: ComponentFixture<JornadasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JornadasComponent]
    });
    fixture = TestBed.createComponent(JornadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
