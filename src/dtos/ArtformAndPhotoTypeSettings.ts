import { Injectable, Input, Output } from "@angular/core"
import { SETTING_DISABLED } from "src/app/constants/SettingsConstants"

@Injectable()
export class ArtformAndPhotoTypeSettings {

  @Input() @Output() artform: string = SETTING_DISABLED
  @Input() @Output() photoType: string = SETTING_DISABLED

  private constructor() { }

  static withDefaults(defaultOpt: string) {
    const settings = new ArtformAndPhotoTypeSettings()
    settings.artform = defaultOpt
    settings.photoType = defaultOpt
    return settings
  }

  static from(obj: any, defaultOpt: string): ArtformAndPhotoTypeSettings {
    const settings: ArtformAndPhotoTypeSettings = ArtformAndPhotoTypeSettings.withDefaults(defaultOpt)
    settings.artform = obj.artform ?? settings.artform
    settings.photoType = obj.photoType ?? settings.photoType
    return settings
  }
}