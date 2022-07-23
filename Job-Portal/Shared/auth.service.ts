import { Injectable } from '@angular/core';
import{AngularFireAuth, AngularFireAuthModule} from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth : AngularFireAuth, private router : Router) { }

  login(email:string,password:string){
    this.fireauth.signInWithEmailAndPassword(email,password).then(res=>{
      localStorage.setItem('token','true');

      if(res.user?.emailVerified == true){
        this.router.navigate(['/dashboard']);
      }
      else{
        this.router.navigate(['/verify-email']);
      }

    }, err=>{
      alert(err.message);
      this.router.navigate(['/login']);
    })
  }

  register(email:string,password:string){
    this.fireauth.createUserWithEmailAndPassword(email,password).then( res=>{
      alert('Registration Sucessfull');
      this.router.navigate(['/login']);
      this.sendEmailForVerification(res.user)
    },err=>{
      alert(err.message);
      this.router.navigate(['/register']);
    })
  }

  logout(){
    this.fireauth.signOut().then( ()=>{
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    },err=>{
      alert(err.message);
    })
  }

  forgotpassword(email:string){
    this.fireauth.sendPasswordResetEmail(email).then(()=>{
      this.router.navigate(['/verify-email']);
    },err=>{
      alert('Something Went Wrong. ');
    })
  }

  sendEmailForVerification(user:any){
    user.sendEmailVerification().then((res:any)=>{
      this.router.navigate(['/verify-email']);
    },(err:any)=>{
      alert('Something Went Wrong. Not able to send mail to your email.')
    })
  }

}
