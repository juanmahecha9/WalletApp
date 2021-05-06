import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from "./guards/auth.guard"
import { FormComponent } from './component/form/form.component';
import { HomeComponent } from './component/home/home.component';
import { WalletComponent } from './component/wallet/wallet.component';
import { LoginComponent } from './component/login/login.component';
import { WalletAddComponent } from './components/wallet-add/wallet-add.component';
import { RegisterComponent } from './components/register/register.component';
import { WalletRemoveComponent } from './components/wallet-remove/wallet-remove.component';


const routes: Routes = [{ path: '', pathMatch: 'full', redirectTo: '/home' },
{ path: 'home', component: HomeComponent },
{ path: 'form2data/:id', component: FormComponent },
{ path: "wallet/:id", component: WalletComponent, canActivate: [AuthGuard] },
{ path: "login", component: LoginComponent },
{ path: "wallet/:id/add", component: WalletAddComponent },
{ path: "register", component: RegisterComponent },
{ path: "wallet/:id/remove", component: WalletRemoveComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
