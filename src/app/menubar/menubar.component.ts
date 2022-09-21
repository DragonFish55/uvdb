import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit {


  public signinf!: Function;
  public signupf!: Function;

  signinVis(){
    let a = document.getElementById("signinbox");
    if(a != null){
      if(a.style.visibility == " " || a.style.visibility == "hidden"){
        a.style.visibility = "visible";
      } else {
        a.style.visibility = "hidden";
      }
      
    }
  }

  switchReg(){
    let a = document.getElementById("signinbox");
    let b = document.getElementById("signupbox");
    if(a != null && b != null){
      a.style.visibility = "hidden";
      b.style.visibility = "visible";
    }

  }

  switchLogin(){
    let a = document.getElementById("signinbox");
    let b = document.getElementById("signupbox");
    if(a != null && b != null){
      a.style.visibility = "visible";
      b.style.visibility = "hidden";
    }

  }

  constructor() { }

  ngOnInit(): void {
    this.signinf = this.switchLogin.bind(this);
    this.signupf = this.switchReg.bind(this);
  }

}
