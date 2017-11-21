import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizAppComponent } from './quiz-app.component';

describe('QuizAppComponent', () => {
  let component: QuizAppComponent;
  let fixture: ComponentFixture<QuizAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
