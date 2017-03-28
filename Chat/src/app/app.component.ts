import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  chats: FirebaseListObservable<any[]>;
  constructor(af: AngularFire) {
    this.chats = af.database.list('/chats');
  }
}
