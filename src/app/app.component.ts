import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'k0r0pt-ai-image-prompt-gen'
  githubLogoUrl = "../assets/github-mark.svg"
  origin = ''
  runningOnServer = false

  constructor(private domSanitizer: DomSanitizer, private matIconRegistry: MatIconRegistry) {
    this.matIconRegistry.addSvgIcon("github", this.domSanitizer.bypassSecurityTrustResourceUrl(this.githubLogoUrl));
    this.origin = window.location.origin
    this.runningOnServer = !['localhost', '127.0.0.1'].includes(this.origin)
  }
}
