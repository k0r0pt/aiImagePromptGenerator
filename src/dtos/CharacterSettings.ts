import { Injectable, Input, Output } from "@angular/core"
import { SETTING_DISABLED } from "src/app/constants/SettingsConstants"

@Injectable()
export class CharacterSettings {

  @Input() @Output() bodyType: string = SETTING_DISABLED
  @Input() @Output() defaultTag: string = SETTING_DISABLED
  @Input() @Output() role: string = SETTING_DISABLED
  @Input() @Output() hairstyle: string = SETTING_DISABLED
  @Input() @Output() clothing: string = SETTING_DISABLED

  private constructor() { }

  static withDefaults(defaultOpt: string) {
    const settings = new CharacterSettings()
    settings.bodyType = defaultOpt
    settings.defaultTag = defaultOpt
    settings.role = defaultOpt
    settings.hairstyle = defaultOpt
    settings.clothing = defaultOpt
    return settings
  }

  static from(obj: any, defaultOpt: string): CharacterSettings {
    const settings: CharacterSettings = CharacterSettings.withDefaults(defaultOpt)
    settings.bodyType = obj.bodyType ?? settings.bodyType
    settings.defaultTag = obj.defaultTag ?? settings.defaultTag
    settings.role = obj.role ?? settings.role
    settings.hairstyle = obj.hairstyle ?? settings.hairstyle
    settings.clothing = obj.clothing ?? settings.clothing
    return settings
  }
}