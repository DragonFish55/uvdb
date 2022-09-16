import { Component, OnInit } from '@angular/core';
import {map} from 'rxjs/operators'


@Component({
  selector: 'app-dblist',
  templateUrl: './dblist.component.html',
  styleUrls: ['./dblist.component.scss']
})
export class DblistComponent implements OnInit {

  dbases = [
    {
        "name":"PostgreSQL",
        "download": "h",
        "icon":"img",
        "size": "330MB"
    },
    {
        "name":"MySQL",
        "download": "h",
        "icon":"img",
        "size": "100MB"
    },
    {
        "name":"MariaDB",
        "download": "h",
        "icon":"img",
        "size": "500MB"
    },
    {
        "name":"SQLServer",
        "download": "h",
        "icon":"img",
        "size": "100MB"
    }
]
  constructor() { }

  ngOnInit(): void {
  }

  downloadDB(name: string){
    console.log(name)  
  }

}
