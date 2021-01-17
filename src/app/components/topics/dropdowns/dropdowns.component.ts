import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdowns',
  templateUrl: './dropdowns.component.html',
  styleUrls: ['./dropdowns.component.css']
})
export class DropdownsComponent implements OnInit {

  constructor() { }
  positions: string[]=['Fresher','Mid-Level','Senior'];
  companies: string[]=['Govt','Tiger IT','Walton'];
  stacks: string[]=['Java','.NET','Angular'];
  criteria: string[]=[];

  @Output()
  dropdownSelectedValues: EventEmitter<string[]>=new EventEmitter<string[]>();

  ngOnInit(): void {
  }
  setCompanyCriteria(event:any){
    this.criteria[0]=event.target.value
  }
  setStackCriteria(event:any){
    this.criteria[1]=event.target.value
  }
  setPositionCriteria(event:any){
    this.criteria[2]=event.target.value
  }
  setFinalCriteria(event:any){
    this.setPositionCriteria(event)
    this.dropdownSelectedValues.emit(this.criteria);
  }
}
