import { HostListener, Component, ComponentRef, OnInit, OnDestroy, AfterViewInit, ViewChild, ViewContainerRef, ComponentFactory, ComponentFactoryResolver } from '@angular/core';
import photos from '../../assets/imgs/meta.json';
import { GalleryImgComponent } from '../gallery-img/gallery-img.component';


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
  @ViewChild('col1', { read: ViewContainerRef }) col1!: ViewContainerRef;
  @ViewChild('col2', { read: ViewContainerRef }) col2!: ViewContainerRef;
  @ViewChild('col3', { read: ViewContainerRef }) col3!: ViewContainerRef;
  columns_heights = [0, 0, 0];
  columns: ViewContainerRef[] = [];
  images: ComponentRef<GalleryImgComponent>[][] = [[],[],[]];
  shortest_column = 0;

  constructor(private resolver: ComponentFactoryResolver) { }

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
    this.addMoreImages(10);
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

  addImage(col_id: number, img_id: number, horizontal: boolean) {
    const factory: ComponentFactory<GalleryImgComponent> = this.resolver.resolveComponentFactory(GalleryImgComponent);
    let image: ComponentRef<GalleryImgComponent> = this.columns[col_id].createComponent(factory);
    image.instance.original = photos[img_id]['original'];
    image.instance.thumbnail = photos[img_id]['thumbnail'];
    image.instance.caption = photos[img_id]['caption']
    image.instance.horizontal = horizontal;
    image.changeDetectorRef.detectChanges();
    this.images[col_id].push(image);
  }

  public addMoreImages(n: number): void {
    for (let i = 0; i < n; i++) {
      if (this.index >= photos.length) {
        return;
      }
      console.log(this.index);

      this.addImage(this.shortest_column, this.index, photos[this.index]['ratio'] < 1.);
      this.columns_heights[this.shortest_column] += photos[this.index]['ratio'];
      this.index += 1;
      this.shortest_column = this.getShortCol();
    }
    return;
  }
}
