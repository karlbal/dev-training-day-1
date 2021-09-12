import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddProductButton : boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleAddProduct(): void {
    this.showAddProductButton = !this.showAddProductButton;
    this.subject.next(this.showAddProductButton);
  }

  onToggle() {
    return this.subject.asObservable();
  }



}
