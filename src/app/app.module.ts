import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropiedadesComponent } from './propiedades/propiedades.component';
import { EvidenciaComponent } from './evidencia/evidencia.component';
import { EjemploManualComponent } from './ejemplo-manual/ejemplo-manual.component';
import { FormsModule } from '@angular/forms';
import { FormsReactivosComponent } from './forms-reactivos/forms-reactivos.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { PadreoutComponent } from './padreout/padreout.component';
import { HijooutComponent } from './hijoout/hijoout.component';
import { EVAE3Component } from './eva-e3/eva-e3.component';
import { Padre3Component } from './padre3/padre3.component';
import { Hijo3Component } from './hijo3/hijo3.component';
import { DetailsComponent } from './details/details.component';
import { AdminComponent } from './admin/admin.component';
import { UserListComponent } from './admin/user-list/user-list.component';
import { ProductListComponent } from './admin/product-list/product-list.component';
import { FormulariosComponent } from './formularios/formularios.component'; //IMPORTANT

import { FormD3Component } from './form-d3/form-d3.component'; //IMPORTANT
import { PadreComponent } from './padre/padre.component'; //IMPORTANT
import { HijoComponent } from './hijo/hijo.component'; //IMPORTANT
import { HomeComponent } from './home/home.component'; //IMPORTANT
import { EjemploCLIComponent } from './ejemplo-cli/ejemplo-cli.component'; //IMPORTANT
@NgModule({
  declarations: [
    AppComponent,
    EjemploCLIComponent,
    PropiedadesComponent,
    EvidenciaComponent,
    EjemploManualComponent,
    FormulariosComponent,
    FormsReactivosComponent,
    FormD3Component,
    PadreComponent,
    HijoComponent,
    PadreoutComponent,
    HijooutComponent,
    EVAE3Component,
    Padre3Component,
    Hijo3Component,
    HomeComponent,
    DetailsComponent,
    AdminComponent,
    UserListComponent,
    ProductListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
