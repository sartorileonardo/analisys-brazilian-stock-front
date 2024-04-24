import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
    isMenuOpen = false;

    constructor(private router: Router) { }
  
    toggleMenu(): void {
      this.isMenuOpen = !this.isMenuOpen;
    }
  
    navigateTo(route: string): void {
      this.router.navigateByUrl(route, { skipLocationChange: true }).then(() => {
        this.router.navigate([route]);
      });
      this.isMenuOpen = false;
    }
}