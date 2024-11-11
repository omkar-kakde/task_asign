import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { RouterOutlet } from '@angular/router';
import { PalindromeComponent } from './palindrome/palindrome.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, PalindromeComponent],  // Make sure HttpClientModule is included here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'tasknew';
  data: any;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
  
}
};