import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrbtn',
  templateUrl: './arrbtn.component.html',
  styleUrls: ['./arrbtn.component.scss']
})
export class ArrbtnComponent implements OnInit {

  constructor() { }


  arrClk(){
    let arrdiv = document.getElementById("arrbtn");
    if(arrdiv){
      if(arrdiv.classList.contains('rotate-arrow')){
        arrdiv.classList.remove('rotate-arrow');
      } else{
        arrdiv.classList.add('rotate-arrow');
      }
      
    }
    
  }

  ngOnInit(): void {
  }

}
