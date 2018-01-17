import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../keg.model';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {

  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

  constructor() {
   }

  ngOnInit() {
  }


  onePint(keg) {
    if (keg.quantity <= 0){
      return keg.quantity = 0
    } else {
      keg.quantity -= 1;
    }
  }

  halfGrowler(keg) {
    if (keg.quantity <= 0){
      return keg.quantity = 0
    } else {
      keg.quantity -= 2;
    }
  }

  fullGrowler(keg) {
    if (keg.quantity <= 0){
      return keg.quantity = 0
    } else {
      keg.quantity -= 4;
    }
  }
  lowStock(keg) {
    if (keg.quantity <= 10 ){
      return 'bg-danger';
    }
  }
  highABV(keg) {
    if (keg.abv >= 7 ){
      return 'highABV';
    }
  }

}
