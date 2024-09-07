import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsSpecifierComponent } from './settings-specifier.component';

describe('SettingsSpecifierComponent', () => {
  let component: SettingsSpecifierComponent;
  let fixture: ComponentFixture<SettingsSpecifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsSpecifierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsSpecifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
