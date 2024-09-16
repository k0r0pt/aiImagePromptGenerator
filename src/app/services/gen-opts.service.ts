import { Injectable, Input, Output } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ArtformAndPhotoTypeSettings } from 'src/dtos/ArtformAndPhotoTypeSettings';
import { BasicSettings } from 'src/dtos/BasicSettings';
import { DEFAULT_OPTS, SETTING_DISABLED, SETTING_RANDOM } from '../constants/SettingsConstants';
import { JsonFetchService } from './json-fetch.service';
import { CharacterSettings } from 'src/dtos/CharacterSettings';
import { SceneSettings } from 'src/dtos/SceneSettings';
import { PhotographySettings } from 'src/dtos/PhotographySettings';
import { PoseSettings } from 'src/dtos/PoseSettings';
import { AdvancedSceneSettings } from 'src/dtos/AdvancedSceneSettings';
import { ReplaySubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GenOptsService {

  @Input() @Output() promptText: string = ''

  basicSettings: BasicSettings = new BasicSettings()
  artformAndPhotoTypeSettings: ArtformAndPhotoTypeSettings = ArtformAndPhotoTypeSettings.withDefaults(SETTING_DISABLED)
  characterSettings: CharacterSettings = CharacterSettings.withDefaults(SETTING_DISABLED)
  sceneSettings: SceneSettings = SceneSettings.withDefaults(SETTING_DISABLED)
  photographySettings: PhotographySettings = PhotographySettings.withDefaults(SETTING_DISABLED)
  poseSettings: PoseSettings = PoseSettings.withDefaults(SETTING_DISABLED)
  advancedSceneSettings: AdvancedSceneSettings = AdvancedSceneSettings.withDefaults(SETTING_DISABLED)

  artforms: Array<string> = []
  photoTypes: Array<string> = []
  bodyTypes: Array<string> = []
  defaultTags: Array<string> = []
  roles: Array<string> = []
  hairstyles: Array<string> = []
  clothing: Array<string> = []
  places: Array<string> = []
  sceneLighting: Array<string> = []
  compositions: Array<string> = []
  poses: Array<string> = []
  backgrounds: Array<string> = []
  cameras: Array<string> = []
  colorGradings: Array<string> = []
  keywords: Array<string> = []
  landscapeSubjects: Array<string> = []
  lenses: Array<string> = []
  photographyLighting: Array<string> = []
  photographers: Array<string> = []
  basicPoses: Array<string> = []
  advancedPoses: Array<string> = []
  houseplants: Array<string> = []
  modifiers: Array<string> = []
  advancedScenes: Array<string> = []
  textures: Array<string> = []
  trees: Array<string> = []
  weathers: Array<string> = []

  filteredArtforms: ReplaySubject<Array<string>> = new ReplaySubject<Array<string>>(1);
  filteredPhotoTypes: ReplaySubject<Array<string>> = new ReplaySubject<Array<string>>(1);
  filteredBodyTypes: ReplaySubject<Array<string>> = new ReplaySubject<Array<string>>(1);
  filteredDefaultTags: ReplaySubject<Array<string>> = new ReplaySubject<Array<string>>(1);
  filteredRoles: ReplaySubject<Array<string>> = new ReplaySubject<Array<string>>(1);
  filteredHairstyles: ReplaySubject<Array<string>> = new ReplaySubject<Array<string>>(1);
  filteredClothing: ReplaySubject<Array<string>> = new ReplaySubject<Array<string>>(1);
  filteredPlaces: ReplaySubject<Array<string>> = new ReplaySubject<Array<string>>(1);
  filteredSceneLighting: ReplaySubject<Array<string>> = new ReplaySubject<Array<string>>(1);
  filteredCompositions: ReplaySubject<Array<string>> = new ReplaySubject<Array<string>>(1);
  filteredPoses: ReplaySubject<Array<string>> = new ReplaySubject<Array<string>>(1);
  filteredBackgrounds: ReplaySubject<Array<string>> = new ReplaySubject<Array<string>>(1);
  filteredCameras: ReplaySubject<Array<string>> = new ReplaySubject<Array<string>>(1);
  filteredColorGradings: ReplaySubject<Array<string>> = new ReplaySubject<Array<string>>(1);
  filteredKeywords: ReplaySubject<Array<string>> = new ReplaySubject<Array<string>>(1);
  filteredLandscapeSubjects: ReplaySubject<Array<string>> = new ReplaySubject<Array<string>>(1);
  filteredLenses: ReplaySubject<Array<string>> = new ReplaySubject<Array<string>>(1);
  filteredPhotographyLighting: ReplaySubject<Array<string>> = new ReplaySubject<Array<string>>(1);
  filteredPhotographers: ReplaySubject<Array<string>> = new ReplaySubject<Array<string>>(1);
  filteredBasicPoses: ReplaySubject<Array<string>> = new ReplaySubject<Array<string>>(1);
  filteredAdvancedPoses: ReplaySubject<Array<string>> = new ReplaySubject<Array<string>>(1);
  filteredHouseplants: ReplaySubject<Array<string>> = new ReplaySubject<Array<string>>(1);
  filteredModifiers: ReplaySubject<Array<string>> = new ReplaySubject<Array<string>>(1);
  filteredAdvancedScenes: ReplaySubject<Array<string>> = new ReplaySubject<Array<string>>(1);
  filteredTextures: ReplaySubject<Array<string>> = new ReplaySubject<Array<string>>(1);
  filteredTrees: ReplaySubject<Array<string>> = new ReplaySubject<Array<string>>(1);
  filteredWeathers: ReplaySubject<Array<string>> = new ReplaySubject<Array<string>>(1);

  constructor(private jsonFetchService: JsonFetchService, private cookieService: CookieService) { }

  public init() {
    this.populateList("settings/image-style", "artforms", this.artforms, this.filteredArtforms)
    this.populateList("settings/image-style", "photoTypes", this.photoTypes, this.filteredPhotoTypes)
    this.populateList("settings/character", "bodyTypes", this.bodyTypes, this.filteredBodyTypes)
    this.populateList("settings/character", "defaultTags", this.defaultTags, this.filteredDefaultTags)
    this.populateList("settings/character", "roles", this.roles, this.filteredRoles)
    this.populateList("settings/character", "hairstyles", this.hairstyles, this.filteredHairstyles)
    this.populateList("settings/character", "clothing", this.clothing, this.filteredClothing)
    this.populateList("settings/scene", "place", this.places, this.filteredPlaces)
    this.populateList("settings/scene", "lighting", this.sceneLighting, this.filteredSceneLighting)
    this.populateList("settings/scene", "composition", this.compositions, this.filteredCompositions)
    this.populateList("settings/scene", "pose", this.poses, this.filteredPoses)
    this.populateList("settings/scene", "background", this.backgrounds, this.filteredBackgrounds)
    this.populateList("settings/photography", "camera", this.cameras, this.filteredCameras)
    this.populateList("settings/photography", "colorGrading", this.colorGradings, this.filteredColorGradings)
    this.populateList("settings/photography", "keyword", this.keywords, this.filteredKeywords)
    this.populateList("settings/photography", "landscapeSubject", this.landscapeSubjects, this.filteredLandscapeSubjects)
    this.populateList("settings/photography", "lens", this.lenses, this.filteredLenses)
    this.populateList("settings/photography", "lighting", this.photographyLighting, this.filteredPhotographyLighting)
    this.populateList("settings/photography", "photographer", this.photographers, this.filteredPhotographers)
    this.populateList("settings/pose", "basic", this.basicPoses, this.filteredBasicPoses)
    this.populateList("settings/pose", "advanced", this.advancedPoses, this.filteredAdvancedPoses)
    this.populateList("settings/advancedScene", "houseplant", this.houseplants, this.filteredHouseplants)
    this.populateList("settings/advancedScene", "modifier", this.modifiers, this.filteredModifiers)
    this.populateList("settings/advancedScene", "scene", this.advancedScenes, this.filteredAdvancedScenes)
    this.populateList("settings/advancedScene", "texture", this.textures, this.filteredTextures)
    this.populateList("settings/advancedScene", "tree", this.trees, this.filteredTrees)
    this.populateList("settings/advancedScene", "weather", this.weathers, this.filteredWeathers)

    this.basicSettings = this.cookieService.check("fluxPromptGen.basicSettings") ? BasicSettings.from(JSON.parse(this.cookieService.get("fluxPromptGen.basicSettings"))) : new BasicSettings();
    this.artformAndPhotoTypeSettings = this.cookieService.check("fluxPromptGen.artformAndPhotoTypeSettings") ? ArtformAndPhotoTypeSettings.from(JSON.parse(this.cookieService.get("fluxPromptGen.artformAndPhotoTypeSettings")), this.basicSettings.setAllOptionsTo) : ArtformAndPhotoTypeSettings.withDefaults(this.basicSettings.setAllOptionsTo)
    this.characterSettings = this.cookieService.check("fluxPromptGen.characterSettings") ? CharacterSettings.from(JSON.parse(this.cookieService.get("fluxPromptGen.characterSettings")), this.basicSettings.setAllOptionsTo) : CharacterSettings.withDefaults(this.basicSettings.setAllOptionsTo)
    this.sceneSettings = this.cookieService.check("fluxPromptGen.sceneSettings") ? SceneSettings.from(JSON.parse(this.cookieService.get("fluxPromptGen.sceneSettings")), this.basicSettings.setAllOptionsTo) : SceneSettings.withDefaults(this.basicSettings.setAllOptionsTo)
    this.photographySettings = this.cookieService.check("fluxPromptGen.photographySettings") ? PhotographySettings.from(JSON.parse(this.cookieService.get("fluxPromptGen.photographySettings")), this.basicSettings.setAllOptionsTo) : PhotographySettings.withDefaults(this.basicSettings.setAllOptionsTo)
    this.poseSettings = this.cookieService.check("fluxPromptGen.poseSettings") ? PoseSettings.from(JSON.parse(this.cookieService.get("fluxPromptGen.poseSettings")), this.basicSettings.setAllOptionsTo) : PoseSettings.withDefaults(this.basicSettings.setAllOptionsTo)
    this.advancedSceneSettings = this.cookieService.check("fluxPromptGen.advancedSceneSettings") ? AdvancedSceneSettings.from(JSON.parse(this.cookieService.get("fluxPromptGen.advancedSceneSettings")), this.basicSettings.setAllOptionsTo) : AdvancedSceneSettings.withDefaults(this.basicSettings.setAllOptionsTo)
  }

  private populateList(dir: string, file: string, list: Array<string>, filteredList: ReplaySubject<Array<string>>) {
    this.jsonFetchService.getJSON(dir, file).subscribe(actualList => {
      list.length = 0;
      list.push(...DEFAULT_OPTS.concat(actualList));
      filteredList.next(list.slice());
    })
  }

  public filterMyOptions(filteredList: ReplaySubject<Array<string>>, list: Array<string>, searchTerm: string): void {
    if (!searchTerm) {
      filteredList.next(list.slice());
      return;
    } else {
      searchTerm = searchTerm.toLowerCase();
    }
    // filter the banks
    filteredList.next(
      list.filter(item => item.toLowerCase().indexOf(searchTerm) > -1)
    );

    console.log(`${searchTerm} received...`)
  }

  public generateBasicPrompt(): void {
    this.saveSettings()
    let basicPrompt = ''
    basicPrompt = this.populateValue(this.getOpts({ value: basicPrompt, selection: this.artformAndPhotoTypeSettings.artform, options: this.artforms }))

    let subjectDetails = ''
    subjectDetails = subjectDetails.concat(this.basicSettings.subject ? subjectDetails.concat(this.basicSettings.subject) : '')
    subjectDetails = this.populateValue(this.getOpts({ value: subjectDetails, selection: this.characterSettings.bodyType, options: this.bodyTypes }))
    const subjectTag = this.characterSettings.defaultTag !== SETTING_DISABLED ? this.characterSettings.defaultTag : this.basicSettings.gender === 'Female' ? 'Woman' : this.basicSettings.gender === 'Male' ? 'Man' : 'Person'
    subjectDetails = this.populateValue(this.getOpts({ value: subjectDetails, selection: subjectTag, options: this.defaultTags, delimiter: ' ' }))

    subjectDetails = this.populateValue(this.getOpts({ value: subjectDetails, selection: this.characterSettings.hairstyle, options: this.hairstyles }))
    subjectDetails = this.populateValue(this.getOpts({ value: subjectDetails, selection: this.characterSettings.role, options: this.roles }))

    subjectDetails = this.populateValue(this.getOpts({ value: subjectDetails, selection: this.characterSettings.clothing, options: this.clothing, prefix: 'dressed in '.concat(this.getAorAn(this.characterSettings.clothing)) }))

    basicPrompt = basicPrompt.concat(basicPrompt ? ' of '.concat(this.getAorAn(subjectDetails)).concat(subjectDetails) : '')
    basicPrompt = this.populateValue(this.getOpts({ value: basicPrompt, selection: this.basicSettings.customInputPrompt }))

    basicPrompt = this.populateValue(this.getOpts({ value: basicPrompt, selection: this.sceneSettings.place, options: this.places }))
    basicPrompt = this.populateValue(this.getOpts({ value: basicPrompt, selection: this.sceneSettings.pose, options: this.poses }))
    basicPrompt = this.populateValue(this.getOpts({ value: basicPrompt, selection: this.sceneSettings.lighting, options: this.sceneLighting }))
    basicPrompt = this.populateValue(this.getOpts({ value: basicPrompt, selection: this.sceneSettings.composition, options: this.compositions }))
    basicPrompt = this.populateValue(this.getOpts({ value: basicPrompt, selection: this.sceneSettings.background, options: this.backgrounds }))

    // Camera angle
    basicPrompt = this.populateValue(this.getOpts({ value: basicPrompt, selection: this.artformAndPhotoTypeSettings.photoType, options: this.photoTypes, delimiter: '. ', prefix: 'Camera angle is ', emphasize: true }))

    basicPrompt = this.populateValue(this.getOpts({ value: basicPrompt, selection: this.photographySettings.camera, options: this.cameras, suffix: ' camera device' }))
    basicPrompt = this.populateValue(this.getOpts({ value: basicPrompt, selection: this.photographySettings.colorGrading, options: this.colorGradings }))
    basicPrompt = this.populateValue(this.getOpts({ value: basicPrompt, selection: this.photographySettings.keyword, options: this.keywords, suffix: ' photo type' }))
    basicPrompt = this.populateValue(this.getOpts({ value: basicPrompt, selection: this.photographySettings.landscapeSubject, options: this.landscapeSubjects, prefix: 'photographing ' }))
    basicPrompt = this.populateValue(this.getOpts({ value: basicPrompt, selection: this.photographySettings.lens, options: this.lenses, prefix: 'using ', suffix: ' lens' }))
    basicPrompt = this.populateValue(this.getOpts({ value: basicPrompt, selection: this.photographySettings.lighting, options: this.photographyLighting }))
    basicPrompt = this.populateValue(this.getOpts({ value: basicPrompt, selection: this.photographySettings.photographer, options: this.photographers, prefix: 'photographed by ' }))

    basicPrompt = this.populateValue(this.getOpts({ value: basicPrompt, selection: this.poseSettings.basic, options: this.basicPoses }))
    basicPrompt = this.populateValue(this.getOpts({ value: basicPrompt, selection: this.poseSettings.advanced, options: this.advancedPoses }))

    basicPrompt = this.populateValue(this.getOpts({ value: basicPrompt, selection: this.advancedSceneSettings.houseplant, options: this.houseplants, suffix: ' plants' }))
    basicPrompt = this.populateValue(this.getOpts({ value: basicPrompt, selection: this.advancedSceneSettings.modifier, options: this.modifiers, suffix: ' scene' }))
    basicPrompt = this.populateValue(this.getOpts({ value: basicPrompt, selection: this.advancedSceneSettings.scene, options: this.advancedScenes }))
    basicPrompt = this.populateValue(this.getOpts({ value: basicPrompt, selection: this.advancedSceneSettings.texture, options: this.textures, suffix: ' textures' }))
    basicPrompt = this.populateValue(this.getOpts({ value: basicPrompt, selection: this.advancedSceneSettings.tree, options: this.trees, suffix: ' trees' }))
    basicPrompt = this.populateValue(this.getOpts({ value: basicPrompt, selection: this.advancedSceneSettings.weather, options: this.weathers, suffix: ' weather' }))

    this.promptText = basicPrompt
  }

  private saveSettings() {
    // TODO Set secure and path and domain for production deployments.
    const expiryOpts = { expires: new Date(new Date().getTime() + (365 * 24 * 60 * 60 * 1000)) }
    this.cookieService.set("fluxPromptGen.basicSettings", JSON.stringify(this.basicSettings), expiryOpts)
    this.cookieService.set("fluxPromptGen.artformAndPhotoTypeSettings", JSON.stringify(this.artformAndPhotoTypeSettings), expiryOpts)
    this.cookieService.set("fluxPromptGen.characterSettings", JSON.stringify(this.characterSettings), expiryOpts)
    this.cookieService.set("fluxPromptGen.sceneSettings", JSON.stringify(this.sceneSettings), expiryOpts)
    this.cookieService.set("fluxPromptGen.photographySettings", JSON.stringify(this.photographySettings), expiryOpts)
    this.cookieService.set("fluxPromptGen.poseSettings", JSON.stringify(this.poseSettings), expiryOpts)
    this.cookieService.set("fluxPromptGen.advancedSceneSettings", JSON.stringify(this.advancedSceneSettings), expiryOpts)
  }

  private populateValue(opts: PopulateOptionsBase = PopulateOptions): string {
    opts.value = opts.value?.concat(opts.selection && !DEFAULT_OPTS.includes(opts.selection) ? (opts.value ? opts.delimiter ?? '' : '').concat(opts.prefix ?? '').concat(opts.emphasize ? `(${opts.selection}:${this.getRandomNumber(1.2, 1.5)})` : opts.selection).concat(opts.suffix ?? '') : '')
    opts.value = opts.value?.concat(opts.selection === SETTING_RANDOM ? (opts.value ? opts.delimiter ?? '' : '').concat(opts.prefix ?? '').concat(opts.emphasize ? `(${this.getRandomEntry(opts.options ?? [])}:${this.getRandomNumber(1.2, 1.5)})` : this.getRandomEntry(opts.options ?? [])).concat(opts.suffix ?? '') : '')
    return opts.value ?? ''
  }

  private getRandomEntry(entries: Array<string>): string {
    return entries[Math.floor(this.getRandomNumber(2, entries.length))]
  }

  private getRandomNumber(min: number, max: number) {
    const num = (Math.random() * (max - min) + min).toFixed(1)
    console.log(num)
    return Number(num)
  }

  private getAorAn(nextStr: string): string {
    const firstChar = nextStr.match(/[a-zA-Z]/)?.pop();
    return !DEFAULT_OPTS.includes(nextStr) ? ['a', 'e', 'i', 'o', 'u'].includes(firstChar ?? nextStr[0].toLocaleLowerCase()) ? "an " : "a " : "";
  }

  private getOpts(obj: PopulateOptionsBase): PopulateOptionsBase {
    return { ...JSON.parse(JSON.stringify(PopulateOptions)), ...obj }
  }
}

interface PopulateOptionsBase {
  value?: string,
  selection?: string,
  options?: Array<string>,
  delimiter?: string,
  prefix?: string,
  suffix?: string
  emphasize?: boolean
}

const PopulateOptions: PopulateOptionsBase = { options: [], delimiter: ', ', prefix: '', suffix: '', emphasize: false }