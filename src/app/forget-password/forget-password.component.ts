import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
//    forgetpassword() {
    
  
//     let email =this.Email;
//     let password =this.password;
//     let confirmpassword = this.passwordS;
//     if (password.length < 8) {
//         alert("password must be in 8 character");
//     }
//     else if(password!=confirmpassword){
//         alert("password and confirm password is not matched")
//     }
//     else {
//         const data = {
//             "Email": email,
//             "psw": password,
//             "cpsw": confirmpassword
//         }
//         console.log(data);
//         alert("password change successfully");
//         window.location.href = "login.html";
//     }
// }

}
