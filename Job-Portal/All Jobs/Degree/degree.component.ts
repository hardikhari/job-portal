import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-degree',
  templateUrl: './degree.component.html',
  styleUrls: ['./degree.component.css']
})
export class DegreeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  dg:degree[]=[
    {exam:"NIVEDI",post:400,Qualification:"Bachelor Degree, M.Tech",lastdate:2022},
    {exam:"NPL",post:20,Qualification:"Any Degree",lastdate:2022},
    {exam:"IIFT",post:60,Qualification:"12th, Bchelor Degree",lastdate:2022},
    {exam:"OIL",post:70,Qualification:"10th+Any Degree",lastdate:2022},
    {exam:"WII",post:420,Qualification:"Be/BTech,AnyDegree",lastdate:2022},
    {exam:"NIPER",post:800,Qualification:"Master Degree",lastdate:2022},
    {exam:"ITBP",post:10,Qualification:"B.com, CA",lastdate:2023},
    {exam:"ISTAM",post:420,Qualification:"DMLT, Be/BTech",lastdate:2022},
    {exam:"NIELIT",post:50,Qualification:"Any Degree",lastdate:2022},
    {exam:"Territorial Army",post:600,Qualification:"Bachelor Degree,MasterDegree",lastdate:2022}
  ]

}
class degree{
  exam:string|undefined;
  post:number|undefined;
  Qualification:string|undefined;
  lastdate:number|undefined;
}