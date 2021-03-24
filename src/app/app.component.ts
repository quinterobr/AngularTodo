import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'PROYECTO ANGULAR';
  myvalue;
  msg: string = '';
  employees = [
    {name : 'Brahian', position: 'Student', email: 'brahianquintero7@gmail.com'},
    {name : 'Alejandro', position: 'Designer', email: 'alejandro@gmail.com'},
    {name : 'Santiago', position: 'Programmer', email: 'santiago@gmail.com'}
  ];
  model:any = {};
  model2:any = {};
  hideUpdate:boolean = true;

  addEmployee():void{
    this.employees.push(this.model);
    this.msg = 'Successfully added';
    this.model = {};
  }
  deleteEmpleyee(i):void{
    let answer = confirm('Are you sure?');
    console.log(answer);
  
    if(answer){
      this.employees.splice(i,1);
      this.msg = 'Successfully Delete';
    }
  }
  editEmployee(i):void{
    this.model2.name = this.employees[i].name;
    this.model2.position = this.employees[i].position;
    this.model2.email = this.employees[i].email;
    this.myvalue = i;
    this.hideUpdate = false;
  }
  updateEmployee():void{
    let i = this.myvalue;
    for(let j = 0; j < this.employees.length; j++){
      if(i == j){
        this.employees[i] = this.model2;
        this.model2 = {};
      }
    }
    this.msg = 'Successfully Update';
    this.hideUpdate = true;
    }
  closeAlert():void{
    this.msg = "";
  }
}
