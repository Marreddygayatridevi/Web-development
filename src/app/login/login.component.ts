import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
declare var name:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email : string = '';
  password : string = '';

  constructor(private auth : AuthService) { }

  ngOnInit(): void {
    new name();
  }
  login(){

    if(this.email == '') {
    alert('please enter email')
    return;
  }

  if(this.password == '') {
    alert('please enter password')
    return;
  }
console.log(this.email);
console.log(this.password);
  this.auth.login(this.email,this.password);
  
  this.email = '';
  this.password = '';
}
  title = 'app-js';

}
