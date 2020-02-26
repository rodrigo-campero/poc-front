import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

// const routes: Routes = [
//   {
//     path: '', component: AppComponent
//   },
//   {
//     path: 'client', loadChildren: () => import('./modules/client/client.module').then(m => m.ClientModule)
//   },
//   {
//     path: 'employee', loadChildren: () => import('./modules/employee/employee.module').then(m => m.EmployeeModule)
//   }
// ];

const routes: Routes = [
  {
    path: '', component: AppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
