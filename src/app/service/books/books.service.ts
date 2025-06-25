import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface BooksList {
  id: number,
  title: string,
  author: string,
  available: boolean
}

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }
 
  baseUrl = "http://localhost:3000/api"


  getAllBooks(){
    return this.http.get<BooksList>(`${this.baseUrl}/books`)
  }
}
