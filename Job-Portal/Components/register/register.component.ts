import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email:string='';
  password:string='';

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }

  register(){
    if(this.email==''){
      alert('Enter your Email');
      return;
    }
    if(this.password==''){
      alert('Enter your Password');
      return;
    }

    this.auth.register(this.email,this.password);

    this.email='';
    this.password='';
  }

}
