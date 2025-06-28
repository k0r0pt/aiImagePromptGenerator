import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { PromptGenComponent } from './prompt-gen/prompt-gen.component';
import { SettingsSpecifierComponent } from './settings-specifier/settings-specifier.component';
import { LlmPromptGenComponent } from './llm-prompt-gen/llm-prompt-gen.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [MatDividerModule, PromptGenComponent, SettingsSpecifierComponent, LlmPromptGenComponent, MatIconModule]
})
export class AppComponent {
  title = 'k0r0pt-ai-image-prompt-gen'
  githubLogoUrl = "../assets/github-mark.svg"
  origin = ''
  runningOnServer = false

  constructor(private readonly domSanitizer: DomSanitizer, private readonly matIconRegistry: MatIconRegistry) {
    this.matIconRegistry.addSvgIcon("github", this.domSanitizer.bypassSecurityTrustResourceUrl(this.githubLogoUrl));
    this.origin = window.location.origin
    this.runningOnServer = !['localhost', '127.0.0.1'].includes(this.origin)
  }
}
