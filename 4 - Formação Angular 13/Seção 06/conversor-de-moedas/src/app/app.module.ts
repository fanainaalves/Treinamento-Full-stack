import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// Importe o módulo HttpClientModule ao invés de HttpModule
//import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ConversorModule } from './conversor';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // Modifique aqui a importação do módulo também
    //HttpModule,
    HttpClientModule,
    ConversorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
