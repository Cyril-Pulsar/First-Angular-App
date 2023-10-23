import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <main>
      <header class="brand-name">
        <img
          class="brand-logo"
          src="/assets/logo.svg"
          alt="logo"
          aria-hidden="true"
        />
      </header>
      <section class="content">
        <app-home></app-home>
      </section>
    </main>
  `,
})
export class AppComponent {
  title = 'First-Angular-Project';
}
