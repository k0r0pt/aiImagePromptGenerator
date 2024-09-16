import { Component } from '@angular/core';
import { GenOptsService } from '../services/gen-opts.service';

@Component({
  selector: 'app-prompt-gen',
  templateUrl: './prompt-gen.component.html',
  styleUrl: './prompt-gen.component.scss'
})
export class PromptGenComponent {

  genOptsService: GenOptsService

  constructor(genOptsService: GenOptsService) {
    this.genOptsService = genOptsService
  }
}
