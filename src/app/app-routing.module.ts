import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartviewComponent } from './cartview/cartview.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { MehfilComponent } from './mehfil/mehfil.component';


const routes: Routes = [
  {path: '', redirectTo:'/yash', pathMatch: 'full'},
  {path: 'yash',component: LoginComponent},
  {path: 'main',component:MainComponent},
  {path: 'mehfil', component: MehfilComponent},
  {path: 'cart',component: CartviewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
