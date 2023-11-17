import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from "@angular/router";

const MODULE_IMPORTS = [
  CommonModule,
  RouterLink,
  RouterLinkActive
];

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [...MODULE_IMPORTS],
  templateUrl: './header.component.html'
})
export class HeaderComponent {

}
