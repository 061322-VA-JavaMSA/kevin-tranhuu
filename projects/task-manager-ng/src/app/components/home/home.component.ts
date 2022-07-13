import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  blue: string = 'blue-text';

  ngOnInit(): void {
  }

  styles = {
    color : 'magenta' // could change dynamically
  }
}
