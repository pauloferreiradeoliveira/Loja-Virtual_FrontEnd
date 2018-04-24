import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrinciapalComponent } from './princiapal.component';

describe('PrinciapalComponent', () => {
  let component: PrinciapalComponent;
  let fixture: ComponentFixture<PrinciapalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrinciapalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrinciapalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
