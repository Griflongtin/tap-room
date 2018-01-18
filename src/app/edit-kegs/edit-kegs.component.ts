import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Keg } from '../keg.model';

@Component({
  selector: 'app-edit-kegs',
  templateUrl: './edit-kegs.component.html',
  styleUrls: ['./edit-kegs.component.scss']
})
export class EditKegsComponent {
  @Input() childSelectedKeg: Keg;
  @Output() doneButtonClickedSender = new EventEmitter();


  doneButtonClicked() {
    this.doneButtonClickedSender.emit();

  }

  constructor() { }

  ngOnInit() {
  }

}
