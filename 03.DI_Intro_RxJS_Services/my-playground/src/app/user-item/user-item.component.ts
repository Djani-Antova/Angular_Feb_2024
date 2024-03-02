import { Component, Input } from '@angular/core';
import { User } from '../types/user';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent {
@Input ("user") user = {} as User; //if the other way does't work, we force it this way
}
