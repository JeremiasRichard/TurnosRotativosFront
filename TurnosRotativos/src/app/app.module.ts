import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { IonicModule } from '@ionic/angular';
import { AboutComponent } from './components/about/about.component';
import { CareersComponent } from './components/careers/careers.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { ConceptosComponent } from './components/conceptos/conceptos.component';
import { JornadasComponent } from './components/jornadas/jornadas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    AboutComponent,
    CareersComponent,
    EmpleadosComponent,
    ConceptosComponent,
    JornadasComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
