import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CareersComponent } from './components/careers/careers.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { ConceptosComponent } from './components/conceptos/conceptos.component';
import { JornadasComponent } from './components/jornadas/jornadas.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,

    children: [
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'careers',
        component: CareersComponent,
      },
      {
        path: 'empleados',
        component: EmpleadosComponent,
      },
      {
        path: 'conceptos',
        component: ConceptosComponent,
      },
      {
        path: 'jornadas',
        component: JornadasComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
