import { Component } from '@angular/core';

export interface Tile {
  img: string;
}

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css']
})
export class PhotoGalleryComponent {
  tiles: Tile[] = [
    { img: "assets/imgs/photos/DSCF4882.jpg" },
    { img: "assets/imgs/photos/DSCF4973.jpg" },
    { img: "assets/imgs/photos/DSCF5126.jpg" },
    { img: "assets/imgs/photos/DSCF5286.jpg" },
    { img: "assets/imgs/photos/DSCF5325.jpg" },
    { img: "assets/imgs/photos/DSCF5364.jpg" }
  ];
}
