import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {firebaseConfig} from "../environments/chatfire.config";
import {AngularFireModule} from "angularfire2";
import { ChatComponent } from './components/chat/chat.component';
import {FirechatService} from "./services/firechat.service";
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
    FirechatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
