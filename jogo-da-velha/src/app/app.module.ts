import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JogoDaVelhaComponent, JogoDaVelhaModule, JogoDaVelhaService } from './jogo-da-velha';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    JogoDaVelhaModule
  ],
  exports: [
    JogoDaVelhaComponent
  ],
  providers: [
    JogoDaVelhaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
