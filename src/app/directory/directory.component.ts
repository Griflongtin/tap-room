import { Component, OnInit } from '@angular/core';
import { Keg } from '../keg';
import { KEGS } from '../keg-list';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {
  kegs = KEGS;
  selectedKeg = Keg;
  constructor() {
   }

  ngOnInit() {
  }

  onePint(keg) {
    keg.quantity -= 1;
    console.log(keg.quantity)
  }

  halfGrowler(keg) {
    keg.quantity -= 2;
    console.log(keg.quantity)
  }

  fullGrowler(keg) {
    keg.quantity -= 4;
    console.log(keg.quantity)
  }

}
