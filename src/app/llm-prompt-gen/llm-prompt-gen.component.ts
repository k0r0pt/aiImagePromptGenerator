import { Component } from '@angular/core';
import { LlmGenService } from '../services/llm-gen.service';

@Component({
  selector: 'app-llm-prompt-gen',
  templateUrl: './llm-prompt-gen.component.html',
  styleUrl: './llm-prompt-gen.component.scss'
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
