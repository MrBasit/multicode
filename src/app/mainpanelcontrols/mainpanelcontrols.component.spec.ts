import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainpanelcontrolsComponent } from './mainpanelcontrols.component';

describe('MainpanelcontrolsComponent', () => {
  let component: MainpanelcontrolsComponent;
  let fixture: ComponentFixture<MainpanelcontrolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainpanelcontrolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainpanelcontrolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
