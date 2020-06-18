import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursocardComponent } from './cursocard.component';

describe('CursocardComponent', () => {
  let component: CursocardComponent;
  let fixture: ComponentFixture<CursocardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursocardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursocardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
