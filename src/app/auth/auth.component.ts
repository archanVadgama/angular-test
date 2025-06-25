import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth/auth.service';

@Component({
  selector: 'app-auth',
  imports: [],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
  constructor(private auth: AuthService,
    private route:Router
  ) {}

  title = 'digital-library';

  loginAsLibrarian() {
    this.auth.loginAsLibrarian().subscribe({
      next: (response) => {
        if(response.token){
          this.setJWTToLocalStorage(response.token)
          alert("You are logged in as Librarian")
          this.route.navigate(['librarian'])
        }
      },
      error: (err) => {
        alert(err)
      }
    }); 
  }

  loginAsUser() {
    this.auth.loginAsUser().subscribe({
      next: (response) => {
        if(response.token){
          this.setJWTToLocalStorage(response.token)
          alert("You are logged in as User")
          this.route.navigate(['dashboard'])
        }
      },
      error: (err) => {
        alert(err)
      }
    });
  }

  setJWTToLocalStorage(token:string){
    localStorage.setItem('jwt-digital-library',token)
  }
}
