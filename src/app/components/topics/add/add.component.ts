import { Component, OnInit } from '@angular/core';
import {Question} from '../../../models/question';
import {TopicService} from '../../../services/topic.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  addedQuestion= new Question();
  stacks: string[];
  companies: string[];
  selectedCompany: string="All"
  selectedStack: string="All"
  selectedPosition: string="All"

  positions: string[]
  constructor(private topicService: TopicService) {

  }

  ngOnInit(): void {
    this.companies=['Govt','Tiger IT','Walton'];
    this.stacks=['Java','.NET','Angular'];
    this.positions=['Fresher','Mid-Level','Senior'];
  }

  onSbmit(question: NgForm){
    this.addedQuestion.company=this.selectedCompany
    this.addedQuestion.stack=this.selectedStack
    this.addedQuestion.position=this.selectedPosition
    console.log(this.addedQuestion)
    this.topicService.AddNewTopic(this.addedQuestion).subscribe(res=>{
      console.log(res)
    })
  }

}
