import {
  Component,
  ElementRef,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild('itemList', { static: true }) itemListEl: ElementRef;
  @ViewChild('itemTemplate', { static: true }) itemTemplate: TemplateRef<any>;

  items = ['United States', 'Mexico', 'Nepal', 'Brazil'];
  selectedIndex = 0;

  get selectedCountry(): string {
    return this.items[this.selectedIndex];
  }

  constructor() {
    this.onSelect = this.onSelect.bind(this);
  }

  ngOnInit(): void {
    this.itemListEl.nativeElement['items'] = this.items;
    this.itemListEl.nativeElement['onSelect'] = this.onSelect;
  }

  onSelect(index: number) {
    this.selectedIndex = index;
  }
}
