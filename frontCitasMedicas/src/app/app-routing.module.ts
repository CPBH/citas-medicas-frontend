import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitaComponent } from './cita/cita/cita.component';
import { MenuComponent } from './menu/menu/menu.component';
import { InicioSesionComponent } from './inicioSesion/inicio-sesion/inicio-sesion.component';
const routes: Routes = [
  {
    path: '', component: InicioSesionComponent
  },
  {
    path: 'menu', component: MenuComponent
  },
  {
    path: 'cita', component: CitaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
