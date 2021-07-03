import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import biblio from '../../assets/biblio.json'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit, AfterViewInit {
  @ViewChild('pub') pubDiv!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    for (var i = 0; i < biblio.length; i++) {
      let html = '<p>[' + (i + 1) + '] ' + biblio[i]['author'] + '. <i>' + biblio[i]['title'] + '.</i> ' + biblio[i]['journal'] + ' ' + biblio[i]['year'] + '</p>'
      this.pubDiv.nativeElement.insertAdjacentHTML('beforeend', html);
    }
  }
}
