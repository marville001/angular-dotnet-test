import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from "../models/item.model";

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private apiBase = 'http://localhost:5247/Items';

  private items_: Item[] = [];
  private error_ = "";


  constructor(private http: HttpClient) { }

  public get items(): Item[] {
    return this.items_;
  }

  public get error(): string {
    return this.error_;
  }

  public resetError() {
    this.error_ = "";
  }

  public async getItems() {
    this.http.get<Item[]>(this.apiBase).subscribe(result => {
      this.items_ = result;
    }, error => {
      let errorMessage = error.statusText === "Unknown Error"
        ? "Failed to fetch items. Please try again later"
        : error?.error?.message ?? error.message;
      this.error_ = errorMessage;

    });
  }

  public async calculateFactorials() {
    this.http.get<Item[]>(this.apiBase+"/factorials").subscribe(result => {
      this.items_ = result;
    }, error => {
      let errorMessage = error.statusText === "Unknown Error"
        ? "Failed to get factorials. Please try again later"
        : error?.error?.message ?? error.message;
      this.error_ = errorMessage;

    });
  }

  public async addItem(item: Item, onSuccess: Function=()=>{}) {
    this.http.post<Item>(this.apiBase+"/new", item).subscribe({
      next: (result) => {
        this.items.push(result)
        onSuccess()
      },
      error: (error) => {
        console.log(error)
        let errorMessage = error.statusText === "Unknown Error"
          ? "Failed to add item. Please try again later"
          : error?.error?.message ?? error.message;
        this.error_ = errorMessage;
      }
    });
  }
}
