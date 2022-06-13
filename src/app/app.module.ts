import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './page/home/home.component';
import { NotfoundComponent } from './page/notfound/notfound.component';
import { HeaderComponent } from './components/header/header.component';
=======
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { OrderStatusComponent } from './user/order-status/order-status.component';
import { OrderHistoryComponent } from './user/order-history/order-history.component';
import { LogoutComponent } from './user/logout/logout.component';
import { HttpClientModule  } from '@angular/common/http'
>>>>>>> parent of 69dfa63... sorted files

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    NavbarComponent,
    HomeComponent,
    NotfoundComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
=======
    RegisterComponent,
    LoginComponent,
    OrderStatusComponent,
    OrderHistoryComponent,
    LogoutComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
>>>>>>> parent of 69dfa63... sorted files
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
