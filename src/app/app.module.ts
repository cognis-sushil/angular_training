import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { HeaderComponent } from './header/header.component';
import { FotterComponent } from './fotter/fotter.component';
import { DirectveComponent } from './directve/directve.component';
import { RolesDirective } from './roles.directive';
import { ReactivePageComponent } from './reactive-page/reactive-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Page1Component,
    Page2Component,
    HeaderComponent,
    FotterComponent,
    DirectveComponent,
    RolesDirective,
    ReactivePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
