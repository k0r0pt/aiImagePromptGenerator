import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromptGenComponent } from './prompt-gen.component';

describe('PromptGenComponent', () => {
  let component: PromptGenComponent;
  let fixture: ComponentFixture<PromptGenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromptGenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromptGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
