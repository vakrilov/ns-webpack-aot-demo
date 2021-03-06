import { Component } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  moduleId: module.id,
  selector: 'ns-lazy',
  templateUrl: `./lazy.component.html`
})
export class LazyComponent {
  constructor(private router: RouterExtensions) {
  }

  goBack() {
    this.router.backToPreviousPage();
  }
}