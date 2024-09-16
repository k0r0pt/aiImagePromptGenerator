import { Injectable, Input, Output } from "@angular/core"
import { SETTING_DISABLED } from "src/app/constants/SettingsConstants"

@Injectable()
export class AdvancedSceneSettings {

  @Input() @Output() houseplant: string = SETTING_DISABLED
  @Input() @Output() modifier: string = SETTING_DISABLED
  @Input() @Output() scene: string = SETTING_DISABLED
  @Input() @Output() texture: string = SETTING_DISABLED
  @Input() @Output() tree: string = SETTING_DISABLED
  @Input() @Output() weather: string = SETTING_DISABLED

  private constructor() { }

  static withDefaults(defaultOpt: string) {
    const settings = new AdvancedSceneSettings()
    settings.houseplant = defaultOpt
    settings.modifier = defaultOpt
    settings.scene = defaultOpt
    settings.texture = defaultOpt
    settings.tree = defaultOpt
    settings.weather = defaultOpt
    return settings
  }

  static from(obj: any, defaultOpt: string): AdvancedSceneSettings {
    const settings: AdvancedSceneSettings = AdvancedSceneSettings.withDefaults(defaultOpt)
    settings.houseplant = obj.houseplant ?? settings.houseplant
    settings.modifier = obj.modifier ?? settings.modifier
    settings.scene = obj.scene ?? settings.scene
    settings.texture = obj.texture ?? settings.texture
    settings.tree = obj.tree ?? settings.tree
    settings.weather = obj.weather ?? settings.weather
    return settings
  }
}