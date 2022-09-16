import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-versionlist',
  templateUrl: './versionlist.component.html',
  styleUrls: ['./versionlist.component.scss']
})
export class VersionlistComponent implements OnInit {

  constructor() { }


  versions = [{
    name: "hey"
  }]

  showVersions(){
    console.log("hi");
  }

  selectVersion(){
    console.log("hi");
  }

  ngOnInit(): void {
  }

}
