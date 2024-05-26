import { Component,OnInit} from '@angular/core';
import { employeeModel } from '../users.model';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  emp:employeeModel = {}
  allemp:any = []


  constructor(private api:ApiService,private router:Router){}
  ngOnInit(): void {
    this.api.getAllEmpAPI().subscribe((result)=>{
       this.allemp=result

  })
}

  cancel(){
    this.emp = {}
  }
  addEmp(){
    const existingUser = this.allemp.find((item:any)=>item.id==this.emp.id)
    if(existingUser){
      alert("Id already exist!!! Use unique id to add user")
    }else{
      this.api.saveEmpAPI(this.emp).subscribe({
        next:(result:any)=>{
          console.log(result);
          alert(`${result.username} has added to our DB`)
           this.router.navigateByUrl('/employees')
        },
        error:(err:any)=>{
          console.log(err);
          
        }
      })
    }

  }

}
