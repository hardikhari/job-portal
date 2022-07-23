import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { DataService } from '../shared/data.service';

export interface Student{
  id:string,
  firstname:string,
  lastname:string,
  email:string,
  phoneno:string
}

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {
  


  constructor(private auth:AuthService,private data:DataService) { }

  ngOnInit(): void {

  }
  



}
