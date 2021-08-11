import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
  }
  email:string= "";
  password:string="";

  login(){
    if(this.email == ""){
      alert("Email cannot be blank");

    }
    else{
    alert("login successful");
    window.location.href="theatres";
    
    }

  }

}
