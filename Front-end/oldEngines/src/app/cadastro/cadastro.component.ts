import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {


  usuario: Usuario = new Usuario
  confirmarSenha: string

  constructor(
    //injeção de dependencia
    private authService: AuthService,
    private router: Router
  ) {

  }

  ngOnInit() {
      window.scroll(0,0)
      
  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value
  }

  cadastro() {
    if(this.usuario.password != this.confirmarSenha) {
      alert('A senhas estão incorretas')
    } else { 
      this.authService.cadastro(this.usuario).subscribe((resp: Usuario)=> {
        this.usuario = resp
        this.router.navigate(['/entrar'])
        alert ('Usuario cadastrado com sucesso')
      })
      
    }
  }

}
