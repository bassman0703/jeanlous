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
import { ServiceComponent } from './pages/service/service.component';
import { GroupComponent } from './pages/group/group.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { AboutComponent } from './pages/blog/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ContactImgComponent } from './pages/contact/contact-img/contact-img.component';
import { ContactPageHeadComponent } from './pages/contact/contact-page-head/contact-page-head.component';
import { ContactSidebarComponent } from './pages/contact/contact-sidebar/contact-sidebar.component';


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
    ServiceComponent,
    GroupComponent,
    GalleryComponent,
    AboutComponent,
    ContactComponent,
    ContactImgComponent,
    ContactPageHeadComponent,
    ContactSidebarComponent,



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
