import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isWarningVisible:boolean=false;
  constructor(public _authService: AuthService,private _router: Router) { }
  userModel = new User( );

  ngOnInit(): void {
  }

  onSubmit(logForm: NgForm){
    this._authService.doAuthentication(this.userModel).then(result=>{
    this.isWarningVisible=!result;

    this._router.navigate(['/topics'])
    }).catch(reason => {
      this.isWarningVisible=true;
      console.log(reason)
    });
  }
  onReset(logForm: NgForm){
    this.isWarningVisible=false;
    logForm.reset();
  }
}
