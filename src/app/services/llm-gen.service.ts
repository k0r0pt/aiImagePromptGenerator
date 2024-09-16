import { Injectable, Input, Output } from "@angular/core";
import ollama from "ollama/browser";
import { DEFAULT_LLM_SVC, OLLAMA } from "../constants/SettingsConstants";
import { JsonFetchService } from "./json-fetch.service";
import { OllamaOpts } from "src/dtos/OllamaOpts";
import { GenOptsService } from "./gen-opts.service";

@Injectable({ providedIn: "root" })
export class LlmGenService {

  @Input() @Output() detailedPromptText: string = ''
  @Input() @Output() service: string = DEFAULT_LLM_SVC
  @Output() generatingLlmPrompt: boolean = false
  ollamaOpts: OllamaOpts = new OllamaOpts();

  services: Array<string> = []
  models: Array<string> = []

  constructor(private jsonFetchService: JsonFetchService, private genOptsService: GenOptsService) { }

  async init() {
    const listResponse = await ollama.list();
    listResponse.models.forEach((model: any) => this.models.push(model.name));
    this.ollamaOpts.model = this.models.find(model => model.startsWith("llama3.1")) ?? this.models[0];
    this.jsonFetchService.getJSON("llm", "services").subscribe(llmServices => this.services = llmServices);
  }

  async generateDetailedPrompt() {
    this.generatingLlmPrompt = true
    let prompt = "Create a detailed visually descriptive caption of this description, which will be used as a prompt for a text to image AI system "
      + "(caption only, no instructions like \"create an image\").Remove any mention of digital artwork or artwork style. Give detailed visual descriptions "
      + "of the character(s), including ethnicity, skin tone, expression etc. Imagine using keywords for a still for someone who has aphantasia. Describe the "
      + "image style, e.g. any photographic or art styles / techniques utilized. Make sure to fully describe all aspects of the cinematography, with abundant "
      + "technical details and visual descriptions. If there is more than one image, combine the elements and characters from all of the images creatively into "
      + "a single cohesive composition with a single background, inventing an interaction between the characters. Be creative in combining the characters into a "
      + "single cohesive scene. Focus on two primary characters (or one) and describe an interesting interaction between them, such as a hug, a kiss, a fight, giving"
      + " an object, an emotional reaction / interaction. If there is more than one background in the images, pick the most appropriate one. Your output is only the "
      + "caption itself, no comments or extra formatting. The caption is in a single long paragraph. If you feel the images are inappropriate, invent a new scene / characters "
      + "inspired by these. Additionally, incorporate a specific movie director's visual style and describe the lighting setup in detail, including the type, color, and "
      + "placement of light sources to create the desired mood and atmosphere. Always frame the scene, including details about the film grain, color grading, and any artifacts "
      + "or characteristics specific. ((Do NOT add any extra characters, only stick to the characters described in the input.))"
    prompt = prompt.concat("\nInput: " + this.genOptsService.promptText)
    if (this.service === OLLAMA) {
      const response = await ollama.generate({ model: this.ollamaOpts.model, prompt: prompt });
      this.detailedPromptText = response.response;
    }
    this.generatingLlmPrompt = false;
  }
}