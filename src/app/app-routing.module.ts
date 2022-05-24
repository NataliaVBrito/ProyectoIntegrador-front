import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { TecnologiasComponent } from './components/tecnologias/tecnologias.component';



const routes: Routes = [
  {path: 'inicio', component: HeaderComponent},
  { path: 'sobre-mi', component: SobreMiComponent },
  { path: 'educacion', component: EducacionComponent },
  { path: 'tecnologias', component: TecnologiasComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'contacto', component: ContactoComponent },
  {path: '**', redirectTo: 'inicio', pathMatch: 'full'}/*,
  {path: '**', component: Pagina404Component}*/
];

@NgModule({
  imports: [
   CommonModule,
   RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
