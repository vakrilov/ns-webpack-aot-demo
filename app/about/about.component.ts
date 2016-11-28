import { Component } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  moduleId: module.id,
  selector: 'ns-about',
  templateUrl: './about.component.html'
})
export class AboutComponent {
  constructor(private router: RouterExtensions) {
  }

  goBack() {
    this.router.backToPreviousPage();
  }
}