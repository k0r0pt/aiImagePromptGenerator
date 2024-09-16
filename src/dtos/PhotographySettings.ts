import { Injectable, Input, Output } from "@angular/core"
import { SETTING_DISABLED } from "src/app/constants/SettingsConstants"

@Injectable()
export class PhotographySettings {

  @Input() @Output() camera: string = SETTING_DISABLED
  @Input() @Output() colorGrading: string = SETTING_DISABLED
  @Input() @Output() keyword: string = SETTING_DISABLED
  @Input() @Output() landscapeSubject: string = SETTING_DISABLED
  @Input() @Output() lens: string = SETTING_DISABLED
  @Input() @Output() lighting: string = SETTING_DISABLED
  @Input() @Output() photographer: string = SETTING_DISABLED

  private constructor() { }

  static withDefaults(defaultOpt: string) {
    const settings = new PhotographySettings()
    settings.camera = defaultOpt
    settings.colorGrading = defaultOpt
    settings.keyword = defaultOpt
    settings.landscapeSubject = defaultOpt
    settings.lens = defaultOpt
    settings.lighting = defaultOpt
    settings.photographer = defaultOpt
    return settings
  }

  static from(obj: any, defaultOpt: string): PhotographySettings {
    const settings: PhotographySettings = PhotographySettings.withDefaults(defaultOpt)
    settings.camera = obj.camera ?? settings.camera
    settings.colorGrading = obj.colorGrading ?? settings.colorGrading
    settings.keyword = obj.keyword ?? settings.keyword
    settings.landscapeSubject = obj.landscapeSubject ?? settings.landscapeSubject
    settings.lens = obj.lens ?? settings.lens
    settings.lighting = obj.lighting ?? settings.lighting
    settings.photographer = obj.photographer ?? settings.photographer
    return settings
  }
}