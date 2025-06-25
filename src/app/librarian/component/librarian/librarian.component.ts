import { Component } from '@angular/core';
import { AuthService } from '../../../service/auth/auth.service';
import { BooksList, BooksService } from '../../../service/books/books.service';

@Component({
  selector: 'app-librarian',
  imports: [],
  templateUrl: './librarian.component.html',
  styleUrl: './librarian.component.scss',
})
export class LibrarianComponent {
  constructor(private auth: AuthService, private books: BooksService) {}
  username: string = '';
  booksList: BooksList = {
    id: 0,
    title: '',
    author: '',
    available: false,
  };

  ngOnInit() {
    this.books.getAllBooks().subscribe({
      next: (response) => {
        if (response) {
          console.log(this.booksList);
          this.booksList = response;
          console.log(this.booksList);
        }
      },
      error: (err) => {
        alert(err);
      },
    });

    let userToken = localStorage.getItem('jwt-digital-library');

    if (userToken) {
      this.auth.getCurrentUser(userToken).subscribe({
        next: (response) => {
          if (response) {
            this.username = response.username;
          }
        },
        error: (err) => {
          alert(err);
        },
      });
    }
  }
}
