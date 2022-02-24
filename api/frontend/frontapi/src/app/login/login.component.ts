import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
/*
* Author: Zsolnai Bernadett
* Copyright: 2022, Zsolnai Bernadett
* Group: Szoft II N
* Date: 2022-02-24
* Github: 
* Licenc: GNU GPL
*/

export class LoginComponent implements OnInit {

  loginForm !: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      password: new FormControl('', Validators.required),
      name: new FormControl('', Validators.pattern('^[A-Za-zöüóőúűáéíÖÜÓŐÚŰÁÉ 0-9]+$'))
    });
  }

  
}
