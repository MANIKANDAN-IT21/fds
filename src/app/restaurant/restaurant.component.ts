import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-restaurant',
  imports: [FormsModule],
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.css'
})
export class RestaurantComponent {
  location: string = 'Chennai';

  topBrands = [
    { name: 'Pizza Hut', img: 'https://logo.clearbit.com/pizzahut.com' },
    { name: 'Domino\'s', img: 'https://logo.clearbit.com/dominos.com' },
    { name: 'KFC', img: 'https://logo.clearbit.com/kfc.com' },
    { name: 'Burger King', img: 'https://logo.clearbit.com/bk.com' }
  ];

  restaurants = [
    { name: 'The Chennai Cafe', cuisine: 'South Indian', rating: 4.5 },
    { name: 'Madras Tandoori', cuisine: 'North Indian', rating: 4.3 },
    { name: 'Wok This Way', cuisine: 'Chinese', rating: 4.1 },
    { name: 'BBQ Nation', cuisine: 'Grill/BBQ', rating: 4.7 }
  ];

}
