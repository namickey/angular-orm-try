import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
  
  mydata = '[]'
  #http = inject(HttpClient)
  constructor(private http: HttpClient) {
    this.#http.get('http://localhost:3000/users/')
    .subscribe(data => {
      this.mydata = JSON.stringify(data);
    });
  }
}
