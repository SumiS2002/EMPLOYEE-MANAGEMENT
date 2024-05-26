import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { employeeModel } from '../users.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  server_url="https://employee-management-server-9ga0.onrender.com"
  constructor(private http:HttpClient) { }

  saveEmpAPI(emp:employeeModel){
   return this.http.post(`${this.server_url}/employees`,emp)
  }
  getAllEmpAPI(){
    return this.http.get(`${this.server_url}/employees`)

  }

  getAEmpAPI(id:any){
    return this.http.get(`${this.server_url}/employees/${id}`)

  }


  removeEmpAPI(id:any){
    return this.http.delete(`${this.server_url}/employees/${id}`)

  }

  updateEmpAPI(emp:employeeModel){
    return this.http.put(`${this.server_url}/employees/${emp.id}`,emp)

  }


}
