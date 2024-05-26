import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpAPIService {
  server_url="https://employee-management-server-9ga0.onrender.com"
  constructor(private http:HttpClient) { }

  getAllEmpAPI(){
    return this.http.get(`${this.server_url}/employees`)
  }
}
