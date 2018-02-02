import { Component, OnInit } from '@angular/core';

import * as express from 'express';
import {ApiService} from "../../../service/index";
import { Router } from "@angular/router";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {


  username: string;
  password: string;
  user: User;

  constructor(private apiService: ApiService,private route:Router) { }

  ngOnInit() {
  }

  logIn (lUsername,lPassword){
    this.apiService.get('api/user/userpass/' + lUsername + lPassword).subscribe(res => {
      console.log(res);

      if(res!='404')
      {
        window.location.href = '/user';
        alert("sad");

      }

      else if(res==null || res=='User Not Found')
      {
        alert("Wrong user or password");
      }
    });

  }


}

interface User{
  username: string;
  password: string;
}
