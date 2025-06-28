import { Component } from '@angular/core';
import { LlmGenService } from '../services/llm-gen.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-llm-prompt-gen',
  templateUrl: './llm-prompt-gen.component.html',
  styleUrl: './llm-prompt-gen.component.scss',
  imports: [MatFormFieldModule, MatExpansionModule, MatButtonModule, FormsModule, MatProgressSpinnerModule, MatSelectModule, MatDividerModule, MatInputModule]
})
export class LlmPromptGenComponent {

  llmGenService: LlmGenService

  constructor(llmGenService: LlmGenService) {
    this.llmGenService = llmGenService
  }

  async ngOnInit() {
    await this.llmGenService.init();
  }
}
