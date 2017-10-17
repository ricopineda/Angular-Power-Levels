import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperSaiyanGodComponent } from './super-saiyan-god.component';

describe('SuperSaiyanGodComponent', () => {
  let component: SuperSaiyanGodComponent;
  let fixture: ComponentFixture<SuperSaiyanGodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperSaiyanGodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperSaiyanGodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
