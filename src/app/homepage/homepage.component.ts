import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
//import { parseBibFile, normalizeFieldValue } from "bibtex";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  @ViewChild('pub') pubDiv!: ElementRef;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('assets/biblio.bib', { responseType: 'text' }).subscribe(data => console.log(data))
  }

}
