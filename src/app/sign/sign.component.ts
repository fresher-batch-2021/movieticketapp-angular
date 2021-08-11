import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  email:string= "";
  password:string="";
  passwordR:string="";


  register(){
    if(this.password!=this.passwordR ){
      alert("password must be 8 characters");

    }
    else{
    alert("registration successful");
    window.location.href="login";
    
    }
  }

}
