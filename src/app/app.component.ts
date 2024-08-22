import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { MenuInfo } from './header/menu';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FooterComponent,
    HeaderComponent,
    AboutComponent,
    HomeComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'myAngularFirst';
  //HeaderComponent.ActiveComponent = ' home';
  ActiveComponent = 'home';
  MenuInfo: Array<MenuInfo> = [
    { header: 'home', comand: 'Home', isActive: true },
    { header: 'about', comand: 'About', isActive: false },
  ];
  // | undefined;

  HandleBody($event: string) {
    // alert($event);
    this.ActiveComponent = $event;
  }
}
