import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicialComponent } from './inicial/inicial.component';
import { PaginaComponent } from './pagina/pagina.component';
import { ProfessoresComponent } from './professores/professores.component';
import { FormComponent } from './form/form.component';
import { CursosComponent } from './cursos/cursos.component';
import { TestesComponent } from './testes/testes.component';
import { AddcursoComponent } from './addcurso/addcurso.component';
import { CursocardComponent } from './cursocard/cursocard.component';

@NgModule({
  declarations: [
    AppComponent,
    InicialComponent,
    PaginaComponent,
    ProfessoresComponent,
    FormComponent,
    CursosComponent,
    TestesComponent,
    AddcursoComponent,
    CursocardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
