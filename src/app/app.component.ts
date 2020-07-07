/*********************************************************************************
 * WEB422 – Assignment 06
 * I declare that this assignment is my own work in accordance with Seneca Academic Policy.  
 * No part of this assignment has been copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 * 
 * Name: Michael Brackett Student ID: 160780177 Date: April 8th 2020
 * 
 * Online Link: https://polar-castle-75737.herokuapp.com/
 * 
 * **********************************************************************************/

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web422-a6';
  constructor(private router: Router){
    router.events.subscribe(() => {
      window.scrollTo(0, 0);
    });
  }
}
