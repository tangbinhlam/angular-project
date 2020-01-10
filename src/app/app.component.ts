import { Component } from '@angular/core';

@Component({
  selector: 'osalam-root',
  template: `
    <div class="ng-view"></div>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
}
