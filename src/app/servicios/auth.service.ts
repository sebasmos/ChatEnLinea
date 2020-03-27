import { Injectable } from '@angular/core';
// Agregamos las librerias de autenticacion de firebase
import { AngularFireAuth} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth: AngularFireAuth) { }


  // Hacemos funcion de login dentro de una promesa para recibir un resolve o un rejected
  // Ahora que ya tenemos una promesa, entonces donde coloquemos el servicio debemos usar un then o un catch
  login(email:string, password:string){

    return new Promise((resolve, rejected) =>{
      this.AFauth.auth.signInWithEmailAndPassword(email, password).then(user => {
        resolve(user);
      }).catch(err => rejected(err));
    });

  
  }
}
