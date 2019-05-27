import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactosComponent }      from './contactos/contactos.component';
import { ContactoDetailComponent }  from './contacto-detail/contacto-detail.component';
import { DashboardComponent }   from './dashboard/dashboard.component';

const routes: Routes = [
	{ path: '', component: DashboardComponent },
	{ path: 'contactos', component: ContactosComponent },
	{ path: 'detalle/:id', component: ContactoDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
