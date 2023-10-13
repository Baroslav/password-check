import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'password_app';
  password = "";
  requiredColor = ['grey','grey','grey'];
  inputColor = ""
  checkPasswordStrengh() {
    const password : string = this.password;
    const requiredLatter = /[a-zA-Z]/;
    const requiredNumber = /[0-9]/;
    const requiredSymbol = /[^A-Za-z0-9]/;

    if(password.length === 0) {
      this.requiredColor = ['grey','grey','grey'];
    }else if(password.length < 8) {
      this.requiredColor = ['red','red','red'];
    }else if(
      password.search(requiredLatter) !==-1 && 
      password.search(requiredNumber) !==-1 && 
      password.search(requiredSymbol) !==-1 
      ) {
      this.requiredColor = ['green','green','green']
    }else if(
      (password.search(requiredLatter) !==-1 && password.search(requiredNumber) !==-1) ||
      (password.search(requiredNumber) !==-1 && password.search(requiredSymbol) !==-1) ||
      (password.search(requiredLatter) !==-1 && password.search(requiredSymbol) !==-1)
      ) {
      this.requiredColor = ['yellow','yellow','red']
    }else if(
      password.search(requiredLatter) !==-1 ||
      password.search(requiredNumber) !==-1 ||
      password.search(requiredSymbol) !==-1 
      ) {
      this.requiredColor = ['red','grey','grey']
    }
  }

}
