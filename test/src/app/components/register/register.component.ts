import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router'
import { from } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  /* objeto para llenar  */
  user = {
    name: '',
    email: '',
    password: ''
  };
  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  /* captura de los datos */
  /* uso del local storage para poder guardar el token que se adquirio */
  registro() {
   this.authService.registro(this.user).subscribe(
     res =>{
      // console.log(res)
       alert('Registro realizado')
       this.router.navigate(['/home'])
     },
     err =>{
       alert('Registro rechazado')
       console.log(err)
     }

   )
  }

}
