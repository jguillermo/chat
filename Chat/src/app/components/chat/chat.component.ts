import { Component, OnInit } from '@angular/core';
import {FirechatService} from "../../services/firechat.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  mensaje:string = "";
  elemento:any;
  constructor(public _cs:FirechatService) {

    this._cs.cargarMensajes().subscribe(()=>{
      console.log('mensajes cargados');
      setTimeout(()=>{
        this.elemento.scrollTop = this.elemento.scrollHeight;
      },100);

    })

  }

  ngOnInit() {
    this.elemento = document.getElementById("app-mensajes");
  }

  enviar(){
    if(this.mensaje.length ==0){
      return;
    }
    this._cs.agregarMensaje(this.mensaje)
      .then(()=>console.log('todo ok'))
      .catch(()=>console.log('error'));
    console.log(this.mensaje);
    this.mensaje = "";
  }

}
