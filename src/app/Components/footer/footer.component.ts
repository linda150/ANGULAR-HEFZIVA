import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import {ClienteService} from '../../Services/cliente.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

 createClienteForm: FormGroup

  constructor( //Constructor es el que construye el componente
      private formBuilder: FormBuilder,
      private clienteService: ClienteService,
      private router: Router
  ) { 
    this.validator()
  }

  ngOnInit(): void {
  }

 validator(){
    this.createClienteForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      cellphone: ['', Validators.required],
      product: ['', Validators.required]
    })
  }

  sendData(){
    if(this.createClienteForm.valid){
      this.clienteService.create(this.createClienteForm.value).subscribe(
        (clienteCreate)=>{
          alert('Gracias por contactarnos')
          this.router.navigateByUrl('/', {skipLocationChange: true}).then (  
            ()=> this.router.navigate(['/footer'])
            )
          // le estoy diciendo que despues de enviar el formulario me retorne a la pagina principal pero que esta se la salte y despues de hacer eso llegue al footer
          //this.router.navigate(['./home]')****
        },
        (error)=>{
          alert('No se envio la información')
        }
      )
    }else{
      alert('No se envio la información')
    }
  }
}
