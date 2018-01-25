import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';

import { ServiceService } from './service.service';




@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
