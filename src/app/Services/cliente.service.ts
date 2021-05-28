import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //se envia y se recibe información
import { Cliente } from '../Models/Cliente';

@Injectable({
  providedIn: 'root'
})

//Protocolos http://localhost:3000/
export class ClienteService {

  apiURL:string='http://localhost:3000' 
  
  constructor(

    

    private http: HttpClient
  ) { }

  create(formData){
    return this.http.post<Cliente>(`${this.apiURL}/cliente/create`, formData)
  }

}

