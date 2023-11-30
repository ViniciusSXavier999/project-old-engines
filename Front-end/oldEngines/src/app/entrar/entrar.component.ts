import { Component, OnInit } from '@angular/core';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AuthService } from '../service/auth.service';
import { Route, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  usuarioLogin: UsuarioLogin = new UsuarioLogin()
  // para enviar um componente para outra rota 
  

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(){
      window.scroll(0,0)
  }


  entrar(){
    this.auth.entrar(this.usuarioLogin).subscribe({
      next: (resp: UsuarioLogin)=>{
        this.usuarioLogin = resp
        environment.token = this.usuarioLogin.token
        environment.name = this.usuarioLogin.name
        this.router.navigate(['/inicio'])
  
       //  console.log(environment.token)
       // console.log(environment.name)
        //console.log(environment.foto)
        //console.log(environment.id)
      },
      error: erro=> {
        if(erro.status == 401){
          alert('Usuário ou senha estão incorretos')
        }
      },
    });
  }



}
