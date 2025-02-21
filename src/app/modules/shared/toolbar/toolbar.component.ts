import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  constructor(
    private router: Router,
  ) {}

  userIsLogged(): boolean {
    if(localStorage.getItem('jwt') === null) return false;
    return true;
  }

}
