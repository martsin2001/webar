import { Component, OnInit } from '@angular/core';

interface ToolbarItem {
  name: string;
}

@Component({
  selector: 'app-chart-toolbar',
  templateUrl: './chart-toolbar.component.html',
  styleUrls: ['./chart-toolbar.component.scss']
})
export class ChartToolbarComponent implements OnInit {
  toolbarItems: ToolbarItem[] = [
    { name: 'Users' },
    { name: 'Sessions' },
    { name: 'Bounce Rate' },
    { name: 'Session Duration' }
  ];
  selectedItem: ToolbarItem = this.toolbarItems[0];

  constructor() { }

  ngOnInit(): void { }

  selectItem(item: ToolbarItem): void {
    this.selectedItem = item;
  }
}
