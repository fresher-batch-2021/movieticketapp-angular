import { Component, OnInit } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }
 movies:any;
  ngOnInit(): void {
    this.productList();
  }
  productList(){

    const url="https://product-mock-api.herokuapp.com/movieapp/api/v1/movies";

    axios.get(url).then(res =>{
      let data=res.data;
      console.log(data);
       this.movies=res.data;
      

    }).catch(err=>{
      console.log("Error"+err.data);
    });
  }
  delete(id:number){
    const url="https://product-mock-api.herokuapp.com/movieapp/api/v1/movies/"+id;
    alert(id);

    axios.delete(url).then(res =>{
      
      alert("deleted successfully");
      // window.location.href='/';

    }).catch(err=>{
      console.log("Error"+err.data);
    });
  }



}
