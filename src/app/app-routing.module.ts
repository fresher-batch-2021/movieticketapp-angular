import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { AdminComponent } from './admin/admin.component';
import { BookComponent } from './book/book.component';
import { DeleteMovieComponent } from './delete-movie/delete-movie.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { IndexComponent } from './index/index.component';
// import { ListMovieComponent } from './list-movie/list-movie.component';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { SignComponent } from './sign/sign.component';
import { TheatresComponent } from './theatres/theatres.component';

const routes: Routes = [
   {path:'home',component:IndexComponent},
  {path:'login',component:LoginComponent},
  {path:'theatres',component:TheatresComponent},
  {path:'about', component:AboutComponent},
  {path:'book', component:BookComponent},
  {path:'sign',component:SignComponent},
  {path:'movies',component:MoviesComponent},
  {path:'forgetPassword', component:ForgetPasswordComponent},
  {path:'admin',component:AdminComponent},
  {path:'add-movie',component:AddMovieComponent},
  {path:'delete-movie',component:DeleteMovieComponent}
  // {path:'list-movie',component:ListMovieComponent}
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
