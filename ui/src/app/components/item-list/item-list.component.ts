import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsService } from "../../services/items.service";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './item-list.component.html',
})
export class ItemListComponent {

  calculatingFactorial = false;

  constructor(public itemsService: ItemsService) { }

  ngOnInit(): void {
    this.itemsService.getItems();
  }

  ngOnDestroy() {
    this.itemsService.resetError()
  }

  calculateFactorial() {

  }

}
