import { Routes } from '@angular/router';
import { PaymentComponent } from './payment/payment.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { OrderComponent } from './order/order.component';

export const routes: Routes = [
    
    {path:'restaurant', component:RestaurantComponent},
    {path:'order', component:OrderComponent},
    {path:'payment', component:PaymentComponent},
    {path:'delivery', component:DeliveryComponent},

];
