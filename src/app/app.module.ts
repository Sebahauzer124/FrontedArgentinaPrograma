import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoAPComponent } from './components/logo-ap/logo-ap.component';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { BannerComponent } from './components/banner/banner.component';
import { SkillComponent } from './components/skill/skill.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ElabComponent } from './components/elab/elab.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { FooterComponent } from './components/footer/footer.component';
 import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonaService } from './Servicios/persona.service';
import { interceptorProvider } from './Servicios/interceptor-service';
import { NuevaeducacionComponent } from './components/educacion/nuevaeducacion/nuevaeducacion.component';
import { EditareducacionComponent } from './components/educacion/editareducacion/editareducacion.component';
import { NuevoelabComponent } from './components/elab/nuevoelab/nuevoelab.component';
import { EditelabComponent } from './components/elab/editelab/editelab.component';
import { EditarskillComponent } from './components/skill/editarskill/editarskill.component';
import { NuevoskillComponent } from './components/skill/nuevoskill/nuevoskill.component';
import { EditarComponent } from './components/acercade/editar/editar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAPComponent,
    AcercadeComponent,
    BannerComponent,
    SkillComponent,
    ElabComponent,
    EducacionComponent,
    ProyectoComponent,
    FooterComponent,
   HomeComponent,
   LoginComponent,
   NuevaeducacionComponent,
   EditareducacionComponent,
   NuevoelabComponent,
   EditelabComponent,
   EditarskillComponent,
   NuevoskillComponent,
   EditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    interceptorProvider
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
