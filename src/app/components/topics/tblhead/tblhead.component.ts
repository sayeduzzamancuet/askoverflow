import {Component, Input, OnInit, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-tblhead',
  templateUrl: './tblhead.component.html',
  styleUrls: ['./tblhead.component.css']
})
export class TblheadComponent implements OnInit {

  constructor() { }
  @Input()
  count: number=0;
  showTwo: number=2
  ngOnInit(): void {
  }
  @Output()
  rowsToDisplay: EventEmitter<number>=new EventEmitter<number>();
  onRowNumberInput(){
    this.rowsToDisplay.emit(this.showTwo);
  }
}
