import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './components/title/title.component';
import { RegisteredListComponent } from './components/registered-list/registered-list.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { BannerComponent } from './components/banner/banner.component';
import { FulledComponent } from './components/fulled/fulled.component';

@NgModule({
  declarations: [AppComponent, TitleComponent, RegisteredListComponent, RegisterFormComponent, BannerComponent, FulledComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
