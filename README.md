# ImageGenPromptGenerator

[![Build Status](https://github.com/k0r0pt/aiImagePromptGenerator/actions/workflows/build.yml/badge.svg?branch=main)](https://github.com/k0r0pt/aiImagePromptGenerator/actions/workflows/build.yml)

This is our Image AI Prompt Generator, and was heavily inspired by [@gokaygokay](https://huggingface.co/gokaygokay)'s [Flux Prompt Generator](https://huggingface.co/spaces/gokaygokay/FLUX-Prompt-Generator) over on [Huggingface](https://huggingface.co).

## Run Dependencies

Currently, for LLM Prompt generation, this app requires Ollama to be running. It can run on local (default endpoint - http://localhost:11434), or you can specify the location in the 3rd panel.

## Features

### Sections

The app has 3 sections.

* Settings - This is where you specify the various settings in the scene, the camera properties, the character properties, the background, plants, trees etc.
* Basic Prompt - This is where the basic prompt is generated based on the input settings in the first panel.
* LLM Generated Prompt - This is where you can generate an advanced well written prompt using an LLM Model.

### Settings persistence

The selected settings are persisted into cookies, so that if we revisit the app, we can start where we left off.

**The LLM Generation needs Ollama running on your local, and will by default choose [Llama3.1](https://ollama.com/library/llama3.1), if available** - The LLM Generated Prompt section also has a subsection where you can specify where your Ollama is running and choose the LLM model to use.

## Planned Features

* Add support for Grok API for LLM Prompt generation
* Please [raise an Issue](./issues/new) for feature you'd like to see here.
* Please [raise an Issue](./issues/new) for any settings you'd like to see in the Settings panel.

### Note

* Not all Image generation models will work with the LLM generated prompt. Some require, small concise keyword based prompts instead of the prose-like prompts that will be generated with the LLM model(s). In those models, the basic Prompt might work better than the LLM generated prompts, which will work better for Flux based models.

## Running

### k0r0pt AI Image Prompt Generator

You can see it in action here - [k0r0pt AI Image Prompt Generator](https://k0r0pt-ai-image-prompt-gen.sudipto.me)
**NOTE** - You'll have to add the origin to your local Ollama's allowed origins by setting the `OLLAMA_ORIGINS` environment variable - `OLLAMA_ORIGINS=https://k0r0pt-ai-image-prompt-gen.sudipto.me`

### Docker

To run with Docker, you can run this command

```shell
docker run -d -p 8080:80 ghcr.io/k0r0pt/aiimagepromptgenerator
```

After that, you can open [http://localhost:8080](http://localhost:8080).


### Bare Metal

#### Production

Copy the contents of the `dist` directory to your web server and you'll be good to go.

#### Development

##### Dependencies

Run `npm install` to resolve dependencies.

##### Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

##### Run

Run `npm start` to run the project, after which you can open [http://localhost:4200](http://localhost:4200).



Built with [Angular](https://angular.dev/) :heart:
