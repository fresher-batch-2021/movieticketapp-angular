import { Component, OnInit } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {
  email:string= "";
  password:string="";
  passwordR:string="";
  constructor() { }

  ngOnInit(): void {
  }
  Register(){
  
    let email = this.email;
    let password = this.password;
    let passwordR = this.passwordR;
    console.log(email+"-"+password+"-"+passwordR);
    let userobj={
        "email":email,
        "password":password,
        "password-repeat":passwordR
    }
    console.log(userobj);
if(this.password == null  ||this.password.trim()==""){
    alert("password cannot be empty");
}
    else if(this.password != this.passwordR){
   alert("password incorrect");
}
else if(this.password.length < 8)
{
alert("password must be greater than 8 characters");

  }
  else{
    const url="https://product-mock-api.herokuapp.com/movieapp/api/v1/auth/register";
    axios.post(url,userobj).then(res =>{
        alert("registration successful");
        window.location.href ="login.html";

    }).catch(err =>{
        console.error(err);
        alert("unable to register");
    });
  }

}
  

}
