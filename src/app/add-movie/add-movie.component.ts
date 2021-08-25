import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  product() {
    
    var count = 0;
    const url = "https://product-mock-api.herokuapp.com/movieapp/api/v1/movies";//url to get all element from server
    axios.get(url).then(res => {
      alert("hello"); 
  
        console.log(res.data);//to printing in console
        var images = res.data;
        let content = "";
        for (let img of images) { 
            
            content = content + `<div class="product" id="${img.id}">
            <form >
            <a href="/productSpec?id=${img.id}">
            <img class="productImg" src="assets/Images/${img.image_url}"  id="productImg" alt="">    
            </a>
            <p class="productName" id="productName">${img.name}</p>
            <p class="productPrice" id="productPrice" >${img.price}</p>
            <p>${img.id}</p>
            <button type="submit" (ngSubmit)="toCart(${img.id},'${img.name}','${img.image_url}','${img.price}','${img.description}')">add to cart</button>
            </form>
            </div>`;
            //for printing only 4 elements in a row
            count = count + 1;
            if (count == 4) {
            content = content + `<br>`;
            count = 0;
            }
        }
        console.log(content);
        // alert("stop");
        (document.querySelector("#productContainer")as HTMLElement).innerHTML=content;
        
    })
  }
}
