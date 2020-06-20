import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunocardComponent } from './alunocard.component';

describe('AlunocardComponent', () => {
  let component: AlunocardComponent;
  let fixture: ComponentFixture<AlunocardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlunocardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunocardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
