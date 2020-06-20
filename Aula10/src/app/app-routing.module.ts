import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfessoresComponent } from './professores/professores.component';
import { InicialComponent } from './inicial/inicial.component';
import { PaginaComponent } from './pagina/pagina.component';
import { FormComponent } from './form/form.component';
import { CursosComponent } from './cursos/cursos.component';
import { AlunosComponent } from './alunos/alunos.component';



const routes: Routes = [
  { path: 'Home', component: PaginaComponent },
  { path: 'Professores', component: ProfessoresComponent },
  { path: 'Form', component: FormComponent },
  { path: 'Cursos', component: CursosComponent },
  { path: 'Alunos', component: AlunosComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
