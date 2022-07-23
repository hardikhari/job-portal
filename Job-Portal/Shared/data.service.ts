import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import { Student } from '../application/application.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private afs : AngularFirestore) { }


  //add Students
  addStudent(student : Student){
    student.id = this.afs.createId();
    return this.afs.collection('/Students').add(student);
  }

  //get all students
  getAllStudents(){
    return this.afs.collection('/Students').snapshotChanges();
  }

  //delete students
  deleteStudent(student : Student){
    return this.afs.doc('/Students/'+student.id).delete();
  }

  //update Student
  updateStudent(student : Student){
    this.deleteStudent(student);
    this.addStudent(student);
  }


  
}
