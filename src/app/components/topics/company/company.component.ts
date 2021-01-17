import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
declare var $
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit,AfterViewInit {
  @ViewChild('myDataTable') dataTableRef: ElementRef
  dataTable:any;
  constructor() { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.dataTable= $(this.dataTableRef.nativeElement)
    this.dataTable.dataTable()
  }
}
