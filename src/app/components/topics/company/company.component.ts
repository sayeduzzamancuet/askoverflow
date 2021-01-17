import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {TopicService} from '../../../services/topic.service';
declare var $
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit,AfterViewInit {
  @ViewChild('myDataTable') dataTableRef: ElementRef
  dataTable:any;
  constructor(private _topicService: TopicService) { }

  ngOnInit(): void {

  }
  dtOptions:any
  ngAfterViewInit() {
    this._topicService.getListedCompanies().subscribe(res=>{
      this.dataTable= $(this.dataTableRef.nativeElement)
      this.dataTable.dataTable({
        data: res,
        columns: [
          { title: 'ID', data: '_id' },
          { title: 'name', data:'name' },
          { title: 'address',data:'address' },
          { title: 'contact' ,data:'contact'},
        ]
      })
    })

  }
}
