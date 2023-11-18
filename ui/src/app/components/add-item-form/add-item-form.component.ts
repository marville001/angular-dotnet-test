import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ItemsService } from "../../services/items.service";
import { Item } from "../../models/item.model";
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-item-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-item-form.component.html'
})
export class AddItemFormComponent {
  itemForm = new FormGroup({
    title: new FormControl('', [
      Validators.required,
    ]),
    description: new FormControl(''),
  });
  submitted = false;

  constructor(public itemsService: ItemsService, public router: Router) { }

  get itemFormControl() {
    return this.itemForm.controls;
  }

  onAddItem() {
    this.submitted = true;
    if (this.itemForm.valid) {
      this.itemsService.addItem(this.itemForm.value as Item, () => {
        this.itemForm.reset()
        this.router.navigate(['/items'])
      })
    }
  }

  ngOnDestroy() {
    this.itemsService.resetError();
  }

}
