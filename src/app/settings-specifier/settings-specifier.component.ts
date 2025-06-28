import { Component } from '@angular/core';
import { GenOptsService } from '../services/gen-opts.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { AsyncPipe } from '@angular/common';
import { MatInputModule } from '@angular/material/input';

@Component({
    selector: 'app-settings-specifier',
    templateUrl: './settings-specifier.component.html',
    styleUrls: ['./settings-specifier.component.scss'],
    imports: [MatFormFieldModule, MatOptionModule, MatSelectModule, NgxMatSelectSearchModule, MatExpansionModule, FormsModule, MatRadioModule, MatInputModule, AsyncPipe]
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
