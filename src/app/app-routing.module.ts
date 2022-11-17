
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditareducacionComponent } from './components/educacion/editareducacion/editareducacion.component';
import { NuevaeducacionComponent } from './components/educacion/nuevaeducacion/nuevaeducacion.component';
import { EditelabComponent } from './components/elab/editelab/editelab.component';
import { NuevoelabComponent } from './components/elab/nuevoelab/nuevoelab.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditarskillComponent } from './components/skill/editarskill/editarskill.component';
import { NuevoskillComponent } from './components/skill/nuevoskill/nuevoskill.component';
import { EditarComponent } from './components/acercade/editar/editar.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'nuevaexp', component: NuevoelabComponent},
  { path: 'editexp/:id', component: EditelabComponent},
  { path: 'nuevaedu', component: NuevaeducacionComponent},
  { path: 'editedu/:id', component: EditareducacionComponent},
  { path: 'newskill', component: NuevoskillComponent },
  { path: 'editskill/:id', component: EditarskillComponent},
  { path: 'editaracercade', component: EditarComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }