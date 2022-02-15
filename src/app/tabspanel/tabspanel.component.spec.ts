import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabspanelComponent } from './tabspanel.component';

describe('TabspanelComponent', () => {
  let component: TabspanelComponent;
  let fixture: ComponentFixture<TabspanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabspanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabspanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
