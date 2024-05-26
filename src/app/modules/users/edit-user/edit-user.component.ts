import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { employeeModel } from '../users.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  emp:employeeModel = {}
  constructor(private route:ActivatedRoute, private api:ApiService,private router:Router){}

  ngOnInit(): void {
    this.route.params.subscribe((result:any)=>{
      console.log(result);
      const {id} = result
      console.log(id); 
      this.getEmpDetails(id)
    })

    
  }

  getEmpDetails(id:any){
    this.api.getAEmpAPI(id).subscribe((result:any)=>{
      this.emp=result
      console.log(this.emp);
      

    })

  }

  cancel(id:any){
    this.getEmpDetails(id)

    
  }




  updateEmp(){
    this.api.updateEmpAPI(this.emp).subscribe((result:any)=>{
      alert("User Updated Successfully...")
      this.router.navigateByUrl('/employees')
     })


  }

}


