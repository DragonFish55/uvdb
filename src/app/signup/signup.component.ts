import { Component, OnInit, Input } from '@angular/core';
import { ReguserService } from '../reguser.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  @Input() Switchr!: Function;
  
  //signin_form: FormGroup;
  

  constructor(private _reguser: ReguserService, private fb: FormBuilder) {
/*
    this.signin_form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
*/
  }

  ngOnInit(): void {
  }

}
