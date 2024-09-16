import { Injectable, Input, Output } from "@angular/core";

@Injectable({ providedIn: "root" })
export class OllamaOpts {

  @Input() @Output() baseUrl: string = "http://localhost:11434";
  @Input() @Output() model: string = "llama3.1:latest";
}