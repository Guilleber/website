import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomNavbarComponent } from './custom-navbar/custom-navbar.component';
import { ResumeComponent } from './resume/resume.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PhotosComponent } from './photos/photos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { GalleryImgComponent } from './gallery-img/gallery-img.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CustomNavbarComponent,
    ResumeComponent,
    HomepageComponent,
    PhotosComponent,
    PhotoGalleryComponent,
    GalleryImgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
