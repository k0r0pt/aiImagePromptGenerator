import { Injectable, Input, Output } from "@angular/core"
import { SETTING_DISABLED } from "src/app/constants/SettingsConstants"

@Injectable()
export class PoseSettings {

  @Input() @Output() basic: string = SETTING_DISABLED
  @Input() @Output() advanced: string = SETTING_DISABLED

  private constructor() { }

  static withDefaults(defaultOpt: string) {
    const settings = new PoseSettings()
    settings.basic = defaultOpt
    settings.advanced = defaultOpt
    return settings
  }

  static from(obj: any, defaultOpt: string): PoseSettings {
    const settings: PoseSettings = PoseSettings.withDefaults(defaultOpt)
    settings.basic = obj.basic ?? settings.basic
    settings.advanced = obj.advanced ?? settings.advanced
    return settings
  }
}