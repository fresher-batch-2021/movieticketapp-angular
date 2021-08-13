import { Component, OnInit } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
password: string="";
email: string="";
  constructor() { }


  ngOnInit(): void {
  }
  
//          
login(){
let email=this.email;
let password=this.password;
let formalvalues={
  "email":email,
  "password":password
};
if(email == ""|| email==null || email.trim() == ""){
  alert("Invalid email");
}
else{
  if(password.length <4){
    alert("Invaild Password");
  }
  else{
    const url="https://product-mock-api.herokuapp.com/movieapp/api/v1/auth/login";
    axios.post(url,formalvalues).then(res =>{
        alert("login successful");
        window.location.href ="movies.html";

    }).catch(err =>{
        // console.error(err);
        alert("unable to login");
    });
  }


}
}
}
  

  // login(){
  //   if(this.email == ""){
  //     alert("Email cannot be blank");

  //   }
  //   else{
  //   alert("login successful");
  //   window.location.href="theatres";
    
  //   }

  
