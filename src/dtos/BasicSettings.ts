import { Injectable, Input, Output } from "@angular/core"
import { SETTING_DISABLED } from "src/app/constants/SettingsConstants"

@Injectable({ providedIn: "root" })
export class BasicSettings {

  @Input() @Output() customInputPrompt: string = ''
  @Input() @Output() subject: string = ''
  @Input() @Output() gender: string = ''
  @Input() @Output() setAllOptionsTo: string = SETTING_DISABLED

  public static from(obj: any): BasicSettings {
    const settings: BasicSettings = new BasicSettings()
    settings.customInputPrompt = obj.customInputPrompt
    settings.subject = obj.subject
    settings.gender = obj.gender
    settings.setAllOptionsTo = obj.setAllOptionsTo ?? SETTING_DISABLED
    return settings
  }
}
