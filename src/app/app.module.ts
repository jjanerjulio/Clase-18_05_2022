import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/layaut/nav/nav.component';
import { ListUsuarioComponent } from './components/usuario/list-usuario/list-usuario.component';
import { CreateUsuarioComponent } from './components/usuario/create-usuario/create-usuario.component';
import { ListMarcaComponent } from './components/marca/list-marca/list-marca.component';
import { ListVehiculoComponent } from './components/vehiculo/list-vehiculo/list-vehiculo.component';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ListUsuarioComponent,
    CreateUsuarioComponent,
    ListMarcaComponent,
    ListVehiculoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
