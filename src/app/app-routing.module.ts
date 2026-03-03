import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EjemploCLIComponent } from './ejemplo-cli/ejemplo-cli.component';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';
import { HomeComponent } from './home/home.component';
import { FormD3Component } from './form-d3/form-d3.component';

/* 
import { FormulariosComponent } from './formularios/formularios.component';
import { DetailsComponent } from './details/details.component';
import { AdminComponent } from './admin/admin.component';
import { UserListComponent } from './admin/user-list/user-list.component';
import { ProductListComponent } from './admin/product-list/product-list.component'; */

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'ejemplocli', component: EjemploCLIComponent },
  { path: 'formd3', component: FormD3Component },
  {
    path: 'padre',
    component: PadreComponent,
    children: [{ path: 'hijo', component: HijoComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
