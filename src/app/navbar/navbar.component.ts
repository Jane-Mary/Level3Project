import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  title = 'Project';
  constructor(
    private router: Router
  ){}
  logout(){
    
    localStorage.removeItem('auth')
    this.router.navigate(['signin'])
    
  }
}
