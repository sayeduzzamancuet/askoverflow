import { Component, Input, OnInit} from '@angular/core';
import {TopicService} from '../../services/topic.service';
import {Question} from '../../models/question';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})



export class TopicsComponent implements OnInit {
    displayedColumns: string[] = ['_id', 'company', 'stack', 'position','askedQuestion','answer'];

  constructor(private _topicService: TopicService) {

  }
  dataSource=new MatTableDataSource()

  ngOnInit(): void {
  }

  pageSize=5
  pageIndex=1
  previousPageIndex=1;
  @Input() company: string= 'All'
  @Input() stack: string='All'
  @Input() position: string='All'

  dataSize: number;

  tmpData: any
  getAllQustions(){
    console.log(this.company+' '+this.stack+' '+this.position)
    this._topicService.fetchDemoData(this.company,this.stack,this.position).subscribe(response=>{
      this.tmpData=response;
      this.dataSource = response.slice(0,this.pageSize);
      this.dataSize=response.length
    });
  }
  pageSizeOptions: number[] = [5, 10, 25, 100];
 setCriterias(finalCriteria:string[]):void{
    this.company=finalCriteria[0];
    this.position=finalCriteria[2];
    this.stack=finalCriteria[1]
    console.log('-->'+this.company+'-->' + this.position+'--->' + this.stack)
 }
  onPaginateChange($event){
   console.log($event)
    this.pageIndex=$event.pageIndex;
    this.pageSize=$event.pageSize
    this.previousPageIndex=$event.previousPageIndex
    let m=0;
    let n=0;
    if(this.pageIndex==0){
      n=1
      this.previousPageIndex=1
    }
    if(this.previousPageIndex==0){
      n=1
      m=0
    }
    if(this.previousPageIndex>this.pageIndex){
      m=this.pageIndex
      n=this.previousPageIndex
    }
    else {
      m=this.previousPageIndex
      n=this.pageIndex
    }
    this.dataSource=this.tmpData.slice(m*this.pageSize,n*this.pageSize)

  }
}
