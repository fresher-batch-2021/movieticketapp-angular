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
    MoviesComponent
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
