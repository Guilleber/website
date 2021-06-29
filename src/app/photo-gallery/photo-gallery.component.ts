import { HostListener, Component, ElementRef, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import photos from '../../assets/imgs/meta.json';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css']
})
export class PhotoGalleryComponent implements OnInit, AfterViewInit{
  index: number = 0;
  @ViewChild('col1') col1!: ElementRef;
  @ViewChild('col2') col2!: ElementRef;
  @ViewChild('col3') col3!: ElementRef;
  columns_heights = [0, 0, 0];
  columns: ElementRef[] = [];

  constructor() { }

  ngOnInit() { }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateColumnHeight(0);
    this.updateColumnHeight(1);
    this.updateColumnHeight(2);
    console.log("Width: " + event.target.innerWidth);
  }

  ngAfterViewInit(): void {
    this.columns = [this.col1, this.col2, this.col3];
    return;
  }

  getShortCol(): number {
    let min = this.columns_heights[0];
    let argmin = 0;
    for (let i = 1; i < 3; i++) {
      if (this.columns_heights[i] < min) {
        min = this.columns_heights[i]
        argmin = i
      }
    }
    return argmin
  }

  updateColumnHeight(i: number): void {
    let images_in_column = this.columns[i].nativeElement.children;
    if (images_in_column.length == 0) {
      this.columns_heights[i] = 0
    } else {
      this.columns_heights[i] = images_in_column[images_in_column.length - 1].getBoundingClientRect().bottom;
    }
    return;
  }

  public addMoreImages(n: number): void {
    for (let i = 0; i < n; i++) {
      if (this.index >= photos.length) {
        return;
      }
      let shortest = this.getShortCol();
      let template = '<a href="' + photos[this.index]["original"] + '" ><img src="' + photos[this.index]["thumbnail"] + '" class= "w-100 shadow rounded mb-4"/></a>'
      this.columns[shortest].nativeElement.insertAdjacentHTML('beforeend', template);
      this.index += 1
      this.updateColumnHeight(shortest)
    }
    return;
  }
}
