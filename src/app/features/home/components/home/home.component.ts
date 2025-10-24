import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/modules/auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }


  signOut() {
    this.authService.signOut();
  }
}
