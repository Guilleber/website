import { Component, Input, OnInit, ViewChild, AfterViewInit, HostListener, ChangeDetectorRef, ElementRef } from '@angular/core';
import { ModalDirective } from 'angular-bootstrap-md';

@Component({
  selector: 'app-gallery-img',
  templateUrl: './gallery-img.component.html',
  styleUrls: ['./gallery-img.component.css']
})
export class GalleryImgComponent implements OnInit, AfterViewInit {
  @ViewChild(ModalDirective) modal!: ModalDirective;
  @ViewChild('hr') img_el!: ElementRef;
  @Input() original: string = "";
  @Input() thumbnail: string = "";
  @Input() caption: string = "";
  hr_img: string = "";
  @Input() horizontal: boolean = true;
  private observer!: IntersectionObserver;

  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    let options = {
      root: null,
      threshold: 0
    };

    this.observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && this.hr_img.length == 0) {
        this.hr_img = this.original;
        this.ref.detectChanges();
      }
    }, options);

    this.observer.observe(this.img_el.nativeElement);
  }

}
