import { Component, OnInit } from '@angular/core';
import { Keg } from './keg.model';
import { KEGS } from './keg-list';
import { HttpService } from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ HttpService]
})
export class AppComponent implements OnInit {
  title = 'The Tap Room';

  constructor(private httpService: HttpService){}

  masterKegList ;

  ngOnInit(){
    this.httpService.fetchData().subscribe(
      (data) => this.masterKegList = data
    );
  }
  selectedKeg = null;
  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;

  }

  finishedEditing() {
    this.selectedKeg = null;
  }

}
