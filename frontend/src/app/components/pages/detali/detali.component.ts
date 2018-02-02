import { Component, OnInit } from '@angular/core';

import { ApiService } from "../../../service";


@Component({
  selector: 'app-detali',
  templateUrl: './detali.component.html',
  styleUrls: ['./detali.component.less']
})
export class DetaliComponent implements OnInit {



  constructor(private apiService: ApiService) {
  }

  ngOnInit() {

  }
}


