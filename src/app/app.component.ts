import { Component } from '@angular/core';
import { Keg } from './keg.model';
import { KEGS } from './keg-list';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The Tap Room';

  masterKegList: Keg[] = KEGS;

  selectedKeg = null;
  editKeg(clickedKeg) {
    console.log(clickedKeg)
    this.selectedKeg = clickedKeg;
    console.log(this.selectedKeg)
  }

  finishedEditing() {
    this.selectedKeg = null;
  }
}
