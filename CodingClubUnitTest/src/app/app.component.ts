import { Component, OnInit } from '@angular/core';
import { AuthService } from './service/auth.service';
import { Feedback } from './models/feedback';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'CodingClubUnitTest';
  isAuthenticated: boolean = false;
  feedback = {} as Feedback;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated('guest', 'guest');
    this.feedback = this.getFeedback();
  }

  getStatus(): string {
    return 'completed';
  }

  getFeedback(): Feedback {
    let currentStatus = this.getStatus();
    switch (currentStatus) {
      case 'not-started': {
        this.feedback = { session: '', rating: 0, avgfeedback: 'NA', comment: 'NA',status:currentStatus }
        break;
      }
      case 'in-progress': {
        this.feedback = { session: 'Unit Testing', rating: 0, avgfeedback: 'NA', comment: 'NA',status:currentStatus }
        break;
      }
      case 'completed': {
        this.feedback = { session: 'Unit Testing', rating: 4, avgfeedback: 'Not Bad', comment: 'Not Bad' ,status:currentStatus}
        break;
      }

    }
    return this.feedback;
  }
}
