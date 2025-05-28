import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { ContactComponent } from './layouts/contact/contact.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent,FooterComponent,ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fds';
}
