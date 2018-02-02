import { Component, OnInit } from '@angular/core';

// import { ApiService } from "../../../service/api.service";
import { ApiService } from "../../../service/";
import { Router } from "@angular/router";

import { userTabList } from './userTabList';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit {

  tabel1:Array<any>;

  usTab = userTabList;
  constructor(private apiService: ApiService,private route:Router) { }

  ngOnInit() {
    var i =0;
    this.apiService.get('user/' ).subscribe(res => {
      for (i=0;i<this.tabel1.length;i++) {
        this.tabel1[i++] = res[i++];
      }
    });

  }

}
