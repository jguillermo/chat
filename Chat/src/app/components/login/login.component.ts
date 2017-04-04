import { Component, OnInit } from '@angular/core';
import {FirechatService} from "../../services/firechat.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private _cs:FirechatService) { }

  ngOnInit() {
  }

  login(){
    this._cs.login();
  }

}
