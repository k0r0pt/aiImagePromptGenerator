import { Injectable, Input, Output } from "@angular/core"
import { SETTING_DISABLED } from "src/app/constants/SettingsConstants"

@Injectable()
export class SceneSettings {

  @Input() @Output() place: string = SETTING_DISABLED
  @Input() @Output() lighting: string = SETTING_DISABLED
  @Input() @Output() composition: string = SETTING_DISABLED
  @Input() @Output() pose: string = SETTING_DISABLED
  @Input() @Output() background: string = SETTING_DISABLED

  private constructor() { }

  static withDefaults(defaultOpt: string) {
    const settings = new SceneSettings()
    settings.place = defaultOpt
    settings.lighting = defaultOpt
    settings.composition = defaultOpt
    settings.pose = defaultOpt
    settings.background = defaultOpt
    return settings
  }

  static from(obj: any, defaultOpt: string): SceneSettings {
    const settings: SceneSettings = SceneSettings.withDefaults(defaultOpt)
    settings.place = obj.place ?? settings.place
    settings.lighting = obj.lighting ?? settings.lighting
    settings.composition = obj.role ?? settings.composition
    settings.pose = obj.hairstyle ?? settings.pose
    settings.background = obj.background ?? settings.background
    return settings
  }
}