import { Component, OnInit } from '@angular/core';
import { Keg } from './keg.model';
import { KEGS } from './keg-list';
import { HttpService } from './http.service';
declare var firebase: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ HttpService]
})
export class AppComponent implements OnInit {
  title = 'The Tap Room';

  constructor(private httpService: HttpService){}

  masterKegList= [] ;

  ngOnInit(){
    // this.httpService.fetchData().subscribe(
    //   (data) => this.masterKegList = data
    // );
    this.fbGetData();
  }
  fbGetData(){
    firebase.database().ref('/').on('child_added',
    (snapshot) => this.masterKegList.push(snapshot.val())
    )
  }

  selectedKeg = null;
  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;

  }
  finishedEditing() {
    // firebase.database().ref("/").update({
    //   name: this.selectedKeg.name,
    //   brewer: this.selectedKeg.brewer,
    //   price: this.selectedKeg.price,
    //   abv: this.selectedKeg.abv,
    //   img: this.selectedKeg.img,
    //   quantity: this.selectedKeg.quantity
    // });
    this.selectedKeg = null;
  }

}
