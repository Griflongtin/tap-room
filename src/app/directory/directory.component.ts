import { Component, OnInit } from '@angular/core';
import { Keg } from '../keg';
@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {
  keg: Keg = {
    name: 'Cali Creamin',
    brewer: 'Mother Earth',
    price: 'green',
    abv: '4.5',
    img: 'url here'
  };
  constructor() {
   }

  ngOnInit() {
  }

}
