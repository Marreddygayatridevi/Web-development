import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FacewashComponent } from './facewash/facewash.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { AboutusComponent } from './navigationbar/aboutus/aboutus.component';
import { ContactusComponent } from './navigationbar/contactus/contactus.component';
import { HomeComponent } from './navigationbar/home/home.component';
import { NewarrivalsComponent } from './navigationbar/newarrivals/newarrivals.component';
import { RegisterComponent } from './register/register.component';
import { ApplianceComponent } from './sidebar/appliance/appliance.component';
import { BathComponent } from './sidebar/bath/bath.component';
import { FragranceComponent } from './sidebar/fragrance/fragrance.component';
import { HairComponent } from './sidebar/hair/hair.component';
import { KidscareComponent } from './sidebar/kidscare/kidscare.component';
import { MakeupComponent } from './sidebar/makeup/makeup.component';
import { OffersComponent } from './sidebar/offers/offers.component';
import { SkinComponent } from './sidebar/skin/skin.component';
import { VarifyEmailComponent } from './varify-email/varify-email.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"aboutus",component:AboutusComponent},
  {path:"newarrivals",component:NewarrivalsComponent},
  {path:"contactus",component:ContactusComponent},
  {path:"skin",component:SkinComponent},
  {path:"hair",component:HairComponent},
  {path:"fragrance",component:FragranceComponent},
  {path:"bath",component:BathComponent},
  {path:"makeup",component:MakeupComponent},
  {path:"appliance",component:ApplianceComponent},
  {path:"kidscare",component:KidscareComponent},
  {path:"offers",component:OffersComponent},
  {path:"login",component:LoginComponent},
  {path: "",redirectTo: 'register',pathMatch: 'full'}, 
  {path:"dashboard",component : DashboardComponent},
  {path:"register",component : RegisterComponent},
  {path:"forgot-password",component : ForgotPasswordComponent},
  {path:" varify-email",component : VarifyEmailComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
