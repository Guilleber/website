import { Component, Input, OnInit, ViewChild, AfterViewInit, HostListener, ChangeDetectorRef } from '@angular/core';
import { ModalDirective } from 'angular-bootstrap-md';

@Component({
  selector: 'app-gallery-img',
  templateUrl: './gallery-img.component.html',
  styleUrls: ['./gallery-img.component.css']
})
export class GalleryImgComponent implements OnInit, AfterViewInit {
  @ViewChild(ModalDirective) modal!: ModalDirective;
  @Input() original: string = "";
  @Input() thumbnail: string = "";
  @Input() horizontal: boolean = true;
  win_width!: number;
  win_height!: number;

  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.win_width = window.innerWidth * 0.9;
    this.win_height = window.innerHeight * 0.9;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.win_width = window.innerWidth * 0.9;
    this.win_height = window.innerHeight * 0.9;
    this.ref.detectChanges();
  }

  ngAfterViewInit() {
  }

}
