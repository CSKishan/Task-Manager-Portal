import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDeleteTaskComponent } from './show-delete-task.component';

describe('ShowDeleteTaskComponent', () => {
  let component: ShowDeleteTaskComponent;
  let fixture: ComponentFixture<ShowDeleteTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDeleteTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDeleteTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
