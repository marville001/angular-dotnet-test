import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";

const MODULE_IMPORTS = [
  CommonModule,
  RouterOutlet,
  RouterLink,
  RouterLinkActive
];

const COMPONENT_IMPORTS = [
  HeaderComponent
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    ...MODULE_IMPORTS,
    ...COMPONENT_IMPORTS
  ],
})
export class AppComponent {
  title = 'ui';
}
