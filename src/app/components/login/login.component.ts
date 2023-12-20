import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private authService:AuthService){}

  logIn(email:string,password:string){
    this.authService.logInWithEmailAndPassword(email,password);
  }

  logWithGoogle(){
    this.authService.logInWithGoogleProvider();
  }
}
