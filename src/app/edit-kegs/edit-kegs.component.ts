import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Keg } from '../keg.model';

@Component({
  selector: 'app-edit-kegs',
  templateUrl: './edit-kegs.component.html',
  styleUrls: ['./edit-kegs.component.css']
})
export class EditKegsComponent {
  @Input() childSelectedKeg: Keg;

  constructor() { }

  ngOnInit() {
  }

}
