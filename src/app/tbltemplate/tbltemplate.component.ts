import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tbltemplate',
  templateUrl: './tbltemplate.component.html',
  styleUrls: ['./tbltemplate.component.scss']
})
export class TbltemplateComponent implements OnInit {

  //@Input() 
  users: number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
