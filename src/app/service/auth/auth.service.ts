import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface LoginResponse {
  id: string,
  username: string,
  role: string,
  token: string
}

interface UserData {
  id: number,
  username: string,
  role: string,
  token: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  baseUrl = "http://localhost:3000/api"

  loginAsLibrarian(){
    return this.http.post<LoginResponse>(`${this.baseUrl}/login-librarian`, null)
  }

  loginAsUser(){
    return this.http.post<LoginResponse>(`${this.baseUrl}/login-user`, null)
  }

  getCurrentUser(token:string){
    return this.http.get<UserData>(`${this.baseUrl}/me`,{
      headers: {
        "Authorization" : `Bearer ${token}`
      }
    })
  }
}
