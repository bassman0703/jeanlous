import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {BlogComponent} from './pages/blog/blog.component';
import {ServiceComponent} from './pages/service/service.component';
import {GroupComponent} from './pages/group/group.component';
import {GalleryComponent} from './pages/gallery/gallery.component';
import {AboutComponent} from './pages/blog/about/about.component';
import {ContactComponent} from './pages/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'service',
    component: ServiceComponent
  },
  {
    path: 'group',
    component: GroupComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component:ContactComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
