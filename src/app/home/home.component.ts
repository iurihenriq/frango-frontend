import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ThemeService } from '../shared/services/theme.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(public themeService: ThemeService) {}

  ngOnInit(): void {}

  toggle() {
    this.themeService.changeTheme();
  }
}
