import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../about/about.component';
import { HomeComponent } from '../home/home.component';
import { MenuInfo } from './menu';

@Component({
  selector: 'ntg-header',
  standalone: true,
  imports: [AboutComponent, HomeComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Input()
  ActiveComponent = 'home';
  @Input()
  data: Array<MenuInfo> | undefined;

  @Output()
  MenuUpdated = new EventEmitter<string>();

  HandleClick(item: MenuInfo) {
    //throw new Error('Method not implemented.');
    // alert(JSON.stringify(item));
    if (this.data)
      for (let i = 0; i < this.data?.length; i++) {
        this.data[i].isActive = false;
      }
    item.isActive = true;

    this.MenuUpdated.emit(item.header);
  }
}
