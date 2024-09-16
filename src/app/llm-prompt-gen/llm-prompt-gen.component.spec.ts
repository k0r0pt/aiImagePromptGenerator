import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlmPromptGenComponent } from './llm-prompt-gen.component';

describe('LlmPromptGenComponent', () => {
  let component: LlmPromptGenComponent;
  let fixture: ComponentFixture<LlmPromptGenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LlmPromptGenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LlmPromptGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
