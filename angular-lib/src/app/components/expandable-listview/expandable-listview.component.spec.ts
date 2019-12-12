import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandableListviewComponent } from './expandable-listview.component';

describe('ExpandableListviewComponent', () => {
  let component: ExpandableListviewComponent;
  let fixture: ComponentFixture<ExpandableListviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpandableListviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandableListviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
