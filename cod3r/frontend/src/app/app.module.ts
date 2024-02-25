import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { HeaderComponent } from './components/template/header/header.component';
import { NavComponent } from './components/template/nav/nav.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, NavComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
  ],
  providers: [provideClientHydration(), provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
