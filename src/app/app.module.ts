import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { TheatresComponent } from './theatres/theatres.component';
import { IndexComponent } from './index/index.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { BookComponent } from './book/book.component';
import { SignComponent } from './sign/sign.component';
import { MoviesComponent } from './movies/movies.component';
import { BookingConfirmationComponent } from './booking-confirmation/booking-confirmation.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
// import { AddMovie } from './add-movie.js/add-movie.js.component';
import { AdminComponent } from './admin/admin.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { DeleteMovieComponent } from './delete-movie/delete-movie.component';
import { ListMovieComponent } from './list-movie/list-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    TheatresComponent,
    IndexComponent,
    AboutComponent,
    BookComponent,
    SignComponent,
    MoviesComponent,
    BookingConfirmationComponent,
    ForgetPasswordComponent,
    // AddMovie.JsComponent,
    AdminComponent,
    AddMovieComponent,
    DeleteMovieComponent,
    ListMovieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
