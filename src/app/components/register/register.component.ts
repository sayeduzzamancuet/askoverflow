import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  userModel = new User();

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.userModel);
  }

}
