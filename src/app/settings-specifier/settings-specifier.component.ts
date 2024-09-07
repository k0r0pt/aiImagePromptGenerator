import { Component } from '@angular/core';
import { BasicSettings } from 'src/dtos/BasicSettings';
import { GenOptsService } from '../services/gen-opts.service';
import { CookieUtil } from '../util/CookieUtil';

@Component({
  selector: 'app-settings-specifier',
  templateUrl: './settings-specifier.component.html',
  styleUrls: ['./settings-specifier.component.scss']
})
export class SettingsSpecifierComponent {

  private defaultOpts = ["Disabled", "Random"];
  basicSettings: BasicSettings
  artforms: Array<string> = []
  photoTypes: Array<string> = []

  constructor(private genOptsService: GenOptsService, private cookieUtil: CookieUtil) {
    this.basicSettings = {
      customInputPrompt: '',
      subject: '',
      gender: '',
      setAllOptionsTo: 'Disabled'
    };
  }

  ngOnInit() {
    this.genOptsService.getJSON("artforms").subscribe(artforms => this.artforms = this.defaultOpts.concat(artforms))
    this.genOptsService.getJSON("photoTypes").subscribe(photoTypes => this.photoTypes = this.defaultOpts.concat(photoTypes))
  }

  generatePrompt() {
    this.cookieUtil.saveCookie([{ basicSettings: this.basicSettings }])
  }
}
