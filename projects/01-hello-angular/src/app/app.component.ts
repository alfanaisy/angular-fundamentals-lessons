import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <h1>If you are reading this...</h1>
    <p>Things have worked out well! 🎉</p>
    <ol>
      <li>Fiction - Avenged Sevenfold</li>
      <li>Koala Kumal - Raditya Dika</li>
      <li>Shawsank Redemption - Vincent D</li>
    </ol>
  `,
  styles: `
    ol {
      list-style-type: upper-roman;
    }
  `,
})
export class AppComponent {}
