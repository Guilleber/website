import { HostListener, Component, ElementRef, OnInit, OnDestroy, AfterViewInit, ViewChild, Output, EventEmitter } from '@angular/core';
import photos from '../../assets/imgs/meta.json';


export interface DialogData {
  src: string;
}

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css']
})
export class PhotoGalleryComponent implements OnInit, AfterViewInit, OnDestroy{
  index: number = 0;
  @ViewChild('col1') col1!: ElementRef;
  @ViewChild('col2') col2!: ElementRef;
  @ViewChild('col3') col3!: ElementRef;
  columns_heights = [0, 0, 0];
  columns: ElementRef[] = [];
  shortest_column = 0;

  constructor() { }

  ngOnInit() {

  }

  ngOnDestroy() {
    
  }

  @HostListener("window:scroll", [])
  onScroll(): void {
    let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    let max = document.documentElement.scrollHeight;
    if (max-pos <= 300) {
      this.addMoreImages(5);
    }
  }

  ngAfterViewInit(): void {
    this.columns = [this.col1, this.col2, this.col3];
    this.addMoreImages(5);
    return;
  }

  getShortCol(): number {
    let min = this.columns_heights[0];
    let argmin = 0;
    for (let i = 1; i < 3; i++) {
      if (this.columns_heights[i] < min) {
        min = this.columns_heights[i];
        argmin = i;
      }
    }
    return argmin;
  }

  public addMoreImages(n: number): void {
    for (let i = 0; i < n; i++) {
      if (this.index >= photos.length) {
        return;
      }
      console.log(this.index);
      let template = '<a href="' + photos[this.index]["original"] + '"><img src="' + photos[this.index]["thumbnail"] + '" class= "w-100 shadow-1-strong rounded mb-4"/></a>'

      this.columns[this.shortest_column].nativeElement.insertAdjacentHTML('beforeend', template);
      this.columns_heights[this.shortest_column] += photos[this.index]['ratio'];
      this.index += 1;
      this.shortest_column = this.getShortCol();
    }
    return;
  }
}
