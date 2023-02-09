import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.scss']
})
export class SinginComponent {

  constructor(private router: Router) {}

  redirect() {
    this.router.navigate(['signup']);
  }

}
