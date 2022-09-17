import { Component, OnInit } from '@angular/core';
import {map} from 'rxjs/operators'
import { HttpClientModule } from '@angular/common/http';
import dt from '../../assets/data/sqltypes.json'; 

@Component({
  selector: 'app-dblist',
  templateUrl: './dblist.component.html',
  styleUrls: ['./dblist.component.scss']
})
export class DblistComponent implements OnInit {

  dbases = dt;
  
  constructor() { }

  ngOnInit(): void {
  }

  downloadDB(name: string){
    console.log(name)
  }

}
