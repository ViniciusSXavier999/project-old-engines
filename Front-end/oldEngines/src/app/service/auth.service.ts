import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { Observable } from 'rxjs';
import { Usuario } from '../model/Usuario';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }


  entrar (usuarioLogin: UsuarioLogin): Observable<UsuarioLogin> {
    return this.http.post<UsuarioLogin>('http://localhost:8080/users/logar', usuarioLogin)
  }

  cadastro (usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>('http://localhost:8080/users/cadastrar', usuario)
  }

  
  // vai verificar se existe um token no meu enviroment
  logado() {
    let ok: boolean = false 

    if(environment.token != ''){
      ok = true
    }

    return ok
  }
}
