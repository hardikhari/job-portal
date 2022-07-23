import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-forgot-passssword',
  templateUrl: './forgot-passssword.component.html',
  styleUrls: ['./forgot-passssword.component.css']
})
export class ForgotPasssswordComponent implements OnInit {

  email:string='';

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  forgotpassword(){
    this.auth.forgotpassword(this.email);
    this.email='';
  }

}
