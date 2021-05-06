import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { AuthService } from "../../services/auth.service"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = { email: '', password: '' }

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.inicio(this.user)
      .subscribe(
        res => {
          //console.log(res);
          alert('inico de sesion')
          localStorage.setItem('token', res.token);
          this.router.navigate(['/wallet/'+res.id]);
        },
        err => {
          alert('Inicio de sesion erroneo, vuelva a intentar')
          console.log(err)

        }

      )
  }

}
