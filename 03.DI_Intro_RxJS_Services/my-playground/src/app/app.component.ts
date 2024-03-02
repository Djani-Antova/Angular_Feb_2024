import { ChangeDetectionStrategy, Component } from '@angular/core';
import { User } from './types/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})
export class AppComponent {
  title = 'my-playground';
  users: User [] = [{name:"Pesho", age: 10}, {name:"Meri", age: 20},{name:"Ivan", age: 30},{name:"Bill", age: 40},]

  constructor() {
  }

  addUser(inputName: HTMLInputElement, inputAge: HTMLInputElement) {
    const user: User = {
      name:inputName.value,
      age: Number(inputAge.value)
    }
    this.users.push(user);

    inputName.value = "";
    inputAge.value = ""
    
  }
}
