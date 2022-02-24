/*
* Author: Zsolnai Bernadett
* Copyright: 2022, Zsolnai Bernadett
* Group: Szoft II N
* Date: 2022-02-24
* Github: 
* Licenc: GNU GPL
*/

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-listazas',
  templateUrl: './listazas.component.html',
  styleUrls: ['./listazas.component.css']
})
export class ListazasComponent implements OnInit {

  vehicles: any;

  // constructor( private api: ApiService) {}

  ngOnInit(): void {
    this.getVehicle()
  }

  getVehicle(){
    

  }
}
