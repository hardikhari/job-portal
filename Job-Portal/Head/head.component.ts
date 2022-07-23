import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {


  constructor(public auth : AuthService) { }

  ngOnInit(): void {
  }

  search(){
    
  }

}
