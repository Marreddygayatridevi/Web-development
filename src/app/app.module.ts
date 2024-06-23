import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { faFish } from '@fortawesome/free-solid-svg-icons';
import { ApplianceComponent } from './sidebar/appliance/appliance.component';
import { FacewashComponent } from './facewash/facewash.component';
import{ AngularFireModule } from '@angular/fire/compat';
import { environment } from 'C:/Users/LENOVO/Desktop/int 200/project/src/environments/environment';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogoutComponent } from './logout/logout.component';
import { FormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VarifyEmailComponent } from './varify-email/varify-email.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationbarComponent,
    SidebarComponent,
    MaincontentComponent,
    FooterComponent,
    LoginComponent,
    SearchComponent,
    ApplianceComponent,
    FacewashComponent,
    RegisterComponent,
    DashboardComponent,
    LogoutComponent,
    ForgotPasswordComponent,
    VarifyEmailComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {
    library.add(faFilm,faFish);
  }
}
