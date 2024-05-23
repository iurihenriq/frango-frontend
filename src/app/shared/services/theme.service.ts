import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, signal } from '@angular/core';
import { Theme } from '../models/theme.model';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  currentTheme = signal(Theme.LIGHT);

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.init();
  }

  private updateCurrentTheme(theme: Theme) {
    this.currentTheme.set(theme);
    localStorage.setItem('theme', this.currentTheme());
  }

  private updateBodyClass(theme: Theme) {
    const bodyClassList = this.document.body.classList;
    bodyClassList.remove(Theme.LIGHT, Theme.DARK);
    bodyClassList.add(theme);
  }

  private init() {
    if (typeof window !== 'undefined') {
      let initMode = localStorage.getItem('theme');
      if (!initMode) {
        initMode = window.matchMedia('(prefers-color-scheme: dark)').matches ? Theme.DARK : Theme.LIGHT;
      }
      this.updateCurrentTheme(initMode as Theme);
      this.updateBodyClass(this.currentTheme());
    }
  }

  changeTheme() {
    const newTheme = this.currentTheme() === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    this.updateBodyClass(newTheme);
    this.updateCurrentTheme(newTheme);
  }
}
