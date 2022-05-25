import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUsuarioComponent } from './components/usuario/list-usuario/list-usuario.component';
import { ListVehiculoComponent } from './components/vehiculo/list-vehiculo/list-vehiculo.component';

const routes: Routes = [
  {
    path: "usuario",
    component: ListUsuarioComponent
  },
  {
    path: "vehiculo",
    component: ListVehiculoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
