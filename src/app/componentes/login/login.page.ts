import { Component, OnInit } from '@angular/core';
// importamos la clase qiue se exporta desde el servicio
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // creamos variables de usuario
  email:string;
  password:string;

  //inyectamos a nuestro constructor como auth
  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  // fun de login
  onSubmitLogin(){

    this.authService.login(this.email,this.password);
    console.log(res)
  }

}
