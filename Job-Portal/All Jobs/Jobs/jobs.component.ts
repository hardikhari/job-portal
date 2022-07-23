import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  det:jobs[]=[
    {exam:"NIVEDI",post:4,Qualification:"10th, Bachelor Degree, M.Tech",lastdate:2022},
    {exam:"NPL",post:200,Qualification:"10th+ITI",lastdate:2022},
    {exam:"NIVEDI",post:6,Qualification:"12th+BSC",lastdate:2022},
    {exam:"OIL",post:70,Qualification:"10th+ITI",lastdate:2022},
    {exam:"IIFT",post:40,Qualification:"12th+Diploma",lastdate:2022},
    {exam:"INDIAN AIR FORCE",post:80,Qualification:"8th",lastdate:2022},
    {exam:"ITBP",post:100,Qualification:"12th",lastdate:2022},
    {exam:"RMRCB",post:400,Qualification:"10th,ITI",lastdate:2022},
    {exam:"TNSTC",post:600,Qualification:"10th,Post Graduate",lastdate:2022},
    {exam:"BSF",post:6,Qualification:"10th",lastdate:2022}
  ]

}
class jobs{
  exam:string|undefined;
  post:number|undefined;
  Qualification:string|undefined;
  lastdate:number|undefined;
}
