import { Component, OnInit } from '@angular/core';
import { Keg } from '../keg.model';
import { HttpService } from '../http.service';
declare var firebase: any;

@Component({
  selector: 'app-new-kegs',
  templateUrl: './new-kegs.component.html',
  styleUrls: ['./new-kegs.component.scss'],
  providers: [ HttpService]
})
export class NewKegsComponent implements OnInit {

  constructor(private httpService: HttpService) { }
  ngOnInit() {
  }

  fbPostData(name, brewer, price, abv, img){
    firebase.database().ref('/').push({name: name, brewer: brewer, price: price, abv: abv, img: img, quantity: 124 })
  }

}
