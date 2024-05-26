import { Component, OnInit } from '@angular/core';
import { employeeModel } from '../modules/users/users.model';
import { EmpAPIService } from '../empAPIServices/emp-api.service';
import { ApiService } from '../modules/users/service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allEmp:employeeModel[] = []
constructor(private api:ApiService){}
ngOnInit(): void {
    this.getAllEmp()
  }
getAllEmp(){
  this.api.getAllEmpAPI().subscribe((result:any)=>{
    this.allEmp = result
    console.log(this.allEmp);
    
  })
}
deleteUser(id:any){
  this.api.removeEmpAPI(id).subscribe((result:any)=>{
    this.getAllEmp()
  })
}


}


