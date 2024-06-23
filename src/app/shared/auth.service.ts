import { registerLocaleData } from '@angular/common';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth : AngularFireAuth,private router :Router) { }
  //login method
  login(email : string, password : string) {
    this.fireauth.signInWithEmailAndPassword(email,password).then( () => 
    {
      localStorage.setItem( 'token','true');
        this.router.navigate(['/dashboard']);
      },
     err => {
      alert(err.message);
      this.router.navigate(['/login']);
  })

  }



//register method
register(email: string, password: string) {
  this.fireauth.createUserWithEmailAndPassword(email,password).then( res =>
     {
    alert('Registration successful');
    this.router.navigate(['/login']);
    this.sendEmailForVarification(res.user);
  },
  err => {
  alert(err.message);
  this.router.navigate(['/register']);
  })
}

//signout
logout() {
  this.fireauth.signOut().then( () => 
  {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  },
   err =>{
   alert(err.message);
  })
}


//forgot password
forgotpassword(email : string) {
  this.fireauth.sendPasswordResetEmail(email).then( () =>
   {
    this.router.navigate(['/varify-email']);
  },
  err => {
    alert('something went wrong');
})
}

//email varification
sendEmailForVarification(user : any){
  user.sendEmailForVarification().then((res : any) =>
  {
    this.router.navigate(['/varify-email']);
  }, 
  (err : any) => {
alert('something went wrong.Not able to send mail to your email.')
  })

}

}



