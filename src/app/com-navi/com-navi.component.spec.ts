import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComNaviComponent } from './com-navi.component';

describe('ComNaviComponent', () => {
  let component: ComNaviComponent;
  let fixture: ComponentFixture<ComNaviComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComNaviComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComNaviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
