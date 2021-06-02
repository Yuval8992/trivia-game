import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @HostBinding('class') className = '';

  constructor(private overlay: OverlayContainer) { }

  onChangeViewMode(isDarkMode: boolean) {
    const darkClassName = 'darkMode';
    this.className = isDarkMode ? darkClassName : '';
    if (isDarkMode) {
      this.overlay.getContainerElement().classList.add(darkClassName);
    } else {
      this.overlay.getContainerElement().classList.remove(darkClassName);
    }
  }

}
