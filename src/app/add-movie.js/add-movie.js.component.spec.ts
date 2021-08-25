import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMovie.JsComponent } from './add-movie.js.component';

describe('AddMovie.JsComponent', () => {
  let component: AddMovie.JsComponent;
  let fixture: ComponentFixture<AddMovie.JsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMovie.JsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMovie.JsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
