import { TokenService } from './../token.service';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { Usuario } from './usuario';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private $usuarioSubject = new BehaviorSubject<Usuario>({});

  constructor(private tokenService: TokenService) {
    if (this.tokenService.possuiToken()) {
      this.decodificaJWT();
    }
  }

  private decodificaJWT() {
    const token = this.tokenService.retornaToken();
    const usuario = jwtDecode(token) as Usuario;
    this.$usuarioSubject.next(usuario);
  }

  retornaUsuario(): Observable<Usuario> {
    return this.$usuarioSubject.asObservable();
  }

  salvaToken(token: string) {
    this.tokenService.salvaToken(token);
    this.decodificaJWT();
  }

  logout() {
    this.tokenService.excluirToken();
    this.$usuarioSubject.next({});
  }

  estaLogado(): boolean {
    return this.tokenService.possuiToken();
  }
}
