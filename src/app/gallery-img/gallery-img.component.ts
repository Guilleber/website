import { Component, Input, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ModalDirective } from 'angular-bootstrap-md';

@Component({
  selector: 'app-gallery-img',
  templateUrl: './gallery-img.component.html',
  styleUrls: ['./gallery-img.component.css']
})
export class GalleryImgComponent implements OnInit, AfterViewInit {
  @ViewChild(ModalDirective) modal!: ModalDirective;
  @Input() original: string = ""
  @Input() thumbnail: string = ""

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.original = "assets/imgs/photos/DSCF1605.jpg";
    this.thumbnail = "assets/imgs/thumbnails/DSCF1605.jpg";
  }

}
