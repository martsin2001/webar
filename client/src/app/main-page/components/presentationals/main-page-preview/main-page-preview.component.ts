import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-page-preview',
  templateUrl: './main-page-preview.component.html',
  styleUrls: ['./main-page-preview.component.scss']
})
export class MainPagePreviewComponent implements OnInit {
  @Input() currentRoute: string;

  constructor() {}

  ngOnInit() {}
}
