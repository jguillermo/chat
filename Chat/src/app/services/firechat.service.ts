import {Injectable} from '@angular/core';
import {AngularFire, AuthMethods, AuthProviders, FirebaseListObservable} from 'angularfire2';
import {Mensaje} from "../interfaces/mensaje.interface";

@Injectable()
export class FirechatService {

  chats: FirebaseListObservable<any[]>;
  usuario:any={}

  constructor(private af: AngularFire) {
    //this.chats = af.database.list('/chats');

    if(localStorage.getItem('usuario')){
      this.usuario = JSON.parse(localStorage.getItem('usuario'))
    }else{
      this.usuario = null;
    }
  }

  cargarMensajes(){
    this.chats = this.af.database.list('/chats',{
      query:{
        limitToLast:20,
        orderByKey:true
      }
    });

    return this.chats;
  }

  agregarMensaje(texto: string) {
    let mensaje: Mensaje = {
      nombre: "jose guillermo",
      mensaje: texto
    }

    return this.chats.push(mensaje);
  }

  login(){
    this.af.auth.login({
      provider : AuthProviders.Google,
      method : AuthMethods.Popup
    }).then(data=>{
      this.usuario = data;
      localStorage.setItem('usuario',JSON.stringify(data));
      console.log(data)

    });
  }

  logout(){
    localStorage.removeItem('usuario');
    this.usuario = null;
    this.af.auth.logout();
  }
}
