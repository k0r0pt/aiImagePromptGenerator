import { Component, Injectable, Input, Output } from '@angular/core';
import { GenOptsService } from '../services/gen-opts.service';

@Component({
  selector: 'app-settings-specifier',
  templateUrl: './settings-specifier.component.html',
  styleUrls: ['./settings-specifier.component.scss']
})
export class SettingsSpecifierComponent {

  genOptsService: GenOptsService

  constructor(genOptsService: GenOptsService) {
    this.genOptsService = genOptsService
  }

  ngOnInit() {
    this.genOptsService.init()
  }
}
