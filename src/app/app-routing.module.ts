import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';
import { ProductComponent } from './pages/product/product.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  //* Rutas hijas o rutas protegidas
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'product', component: ProductComponent },
      { path: 'catalogue', component: CatalogueComponent },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ],
  },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: '**', component: NotFoundComponent }, //*si la ruta esta mal digitada envia al notfound
];

@NgModule({
  declarations: [],

  imports: [RouterModule.forRoot(routes)], //*especificamos las rutas principales con forRoot

  exports: [RouterModule],
})
export class AppRoutingModule { }
