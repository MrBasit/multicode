import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorpanelComponent } from './editorpanel.component';

describe('EditorpanelComponent', () => {
  let component: EditorpanelComponent;
  let fixture: ComponentFixture<EditorpanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorpanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
