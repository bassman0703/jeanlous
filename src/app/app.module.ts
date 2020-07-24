import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import {AppRoutingModule} from './app-routing.module';
import { TopBarComponent } from './shared/components/top-bar/top-bar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { BlogComponent } from './pages/blog/blog.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeadImgComponent } from './pages/blog/head-img/head-img.component';
import { BodyComponent } from './pages/blog/body/body.component';
import { HomeHeadImgComponent } from './pages/home/home-head-img/home-head-img.component';
import { HomeNewsComponent } from './pages/home/home-news/home-news.component';
import { ExpertsComponent } from './pages/home/experts/experts.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    TopBarComponent,
    FooterComponent,
    BlogComponent,
    HeadImgComponent,
    BodyComponent,
    HomeHeadImgComponent,
    HomeNewsComponent,
    ExpertsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
