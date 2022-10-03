import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CitaComponent } from './cita/cita/cita.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule} from '@angular/material/input';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { MenuComponent } from './menu/menu/menu.component';
import { InicioSesionComponent } from './inicioSesion/inicio-sesion/inicio-sesion.component';
import { PregistroComponent } from './registro/pregistro/pregistro.component';
import {MatIconModule} from "@angular/material/icon";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CitaComponent,
    MenuComponent,
    InicioSesionComponent,
    PregistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
