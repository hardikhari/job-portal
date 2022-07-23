import { Component, OnInit } from '@angular/core';
import { Student } from '../application/application.component';
import { AuthService } from '../shared/auth.service';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  studentsList :Student[] = [];
  studentObj : Student = {
    id: '',
    firstname: '',
    lastname: '',
    email: '',
    phoneno: ''
  };
  id : string='';
  firstname : string='';
  lastname : string='';
  email : string='';
  phoneno : string='';


  constructor(private auth: AuthService,private data :DataService) { }


  file:any;
  getFile(event:any){
    this.file=event.target.files[0];

    console.log('file',this.file);
  }

  ngOnInit(): void {
    this.getAllStudents();
  }

  register(){
    this.auth.logout();
  }

  getAllStudents(){
    this.data.getAllStudents().subscribe(res=>{
      this.studentsList = res.map((e:any)=>{
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })
    },err=>{
      alert('Error while Fetching data');
    })
  }

  resetForm(){
    this.id = '';
    this.firstname = '';
    this.lastname = '';
    this.email = '';
    this.phoneno = '';
  }

  addStudent(){
    if(this.firstname==''||this.lastname==''||this.email==''||this.phoneno==''){
      alert('Fill all Input Field');
      return;
    }
    else{
      alert('SucessFully registered');
    }

    this.studentObj.id = '';
    this.studentObj.email = this.email;
    this.studentObj.phoneno = this.phoneno;
    this.studentObj.firstname = this.firstname;
    this.studentObj.lastname = this.lastname;

    this.data.addStudent(this.studentObj);
    this.resetForm();
  }

  updateStudent(){

  }

  deleteStudent(student : Student){
    if(window.confirm('Are you Sure you Want to delete'+ student.firstname +''+student.lastname+'')){
      this.data.deleteStudent(student);
    }
  }

}
