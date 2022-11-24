import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from './pages/pages-routing.module';

import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  //* Rutas hijas o rutas protegidas
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NotFoundComponent }, //*si la ruta esta mal digitada envia al notfound
];

@NgModule({
  declarations: [],

  imports: [PagesRoutingModule, RouterModule.forRoot(routes)], //*especificamos las rutas principales con forRoot

  exports: [RouterModule],
})
export class AppRoutingModule { }
