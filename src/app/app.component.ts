import { Component } from '@angular/core';
import { faUser } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BookHive';
  fauser = faUser;
}
