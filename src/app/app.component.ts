import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { ContactComponent } from './layouts/contact/contact.component';
import { ServiceComponent } from './layouts/service/service.component';
import { HomeComponent } from './layouts/home/home.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,HeaderComponent,FooterComponent,ContactComponent,ServiceComponent,HomeComponent,RestaurantComponent,LoginComponent,RegistrationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fds';
}
