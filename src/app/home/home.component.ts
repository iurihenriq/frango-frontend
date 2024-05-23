import { Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FormControl } from '@angular/forms';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  isChecked = new FormControl(false)
  @HostBinding('class') className = ''
  darkClass = 'theme-dark'
  lightClass = 'theme-light'

constructor(private overlay: OverlayContainer){}

  ngOnInit(): void {
    this.isChecked.valueChanges.subscribe((currentMode)=>{
      this.className = currentMode ? this.darkClass : this.lightClass

      if(currentMode) {
        this.overlay.getContainerElement().classList.add(this.darkClass)
      } else {
        this.overlay.getContainerElement().classList.remove(this.darkClass)
      }
    })
  }
}
