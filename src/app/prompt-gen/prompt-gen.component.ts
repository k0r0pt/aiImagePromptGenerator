import { Component } from '@angular/core';
import { GenOptsService } from '../services/gen-opts.service';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
    selector: 'app-prompt-gen',
    templateUrl: './prompt-gen.component.html',
    styleUrl: './prompt-gen.component.scss',
    imports: [MatDividerModule, FormsModule, MatFormFieldModule, MatExpansionModule, MatDividerModule, MatButtonModule, MatInputModule]
})
export class PromptGenComponent {

  genOptsService: GenOptsService

  constructor(genOptsService: GenOptsService) {
    this.genOptsService = genOptsService
  }
}
