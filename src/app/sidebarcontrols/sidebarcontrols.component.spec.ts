import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarcontrolsComponent } from './sidebarcontrols.component';

describe('SidebarcontrolsComponent', () => {
  let component: SidebarcontrolsComponent;
  let fixture: ComponentFixture<SidebarcontrolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarcontrolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarcontrolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
