import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tableinfo',
  templateUrl: './tableinfo.component.html',
  styleUrls: ['./tableinfo.component.scss']
})
export class TableinfoComponent implements OnInit {
  
  private hey : string;

  constructor() { 
      this.hey = "hello";
      console.log(this.hey);
  }

  ngOnInit(): void {
  }

}
