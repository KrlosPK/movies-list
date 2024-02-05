import { Component } from '@angular/core';

@Component({
  selector: 'shared-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass'],
})
export class FooterComponent {
  public date: string = '';

  constructor() {
    this.date = new Date().getFullYear().toString();
  }
}
