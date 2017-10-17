import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperSaiyanBlueComponent } from './super-saiyan-blue.component';

describe('SuperSaiyanBlueComponent', () => {
  let component: SuperSaiyanBlueComponent;
  let fixture: ComponentFixture<SuperSaiyanBlueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperSaiyanBlueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperSaiyanBlueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
