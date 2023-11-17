import { Routes } from '@angular/router';
import { ItemListComponent } from "./components/item-list/item-list.component";
import { AddItemFormComponent } from "./components/add-item-form/add-item-form.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";

export const routes: Routes = [
  { path: '', redirectTo: '/items', pathMatch: 'full' },
  { path: 'items', component: ItemListComponent },
  { path: 'new-item', component: AddItemFormComponent },
  { path: '**', component: PageNotFoundComponent },
];
