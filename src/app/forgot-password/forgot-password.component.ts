import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  email : string ='';

  constructor(private auth : AuthService) { }

  ngOnInit(): void {
  }

  forgotpassword() {
    this.auth.forgotpassword(this.email);
    this.email ='';


  }

}