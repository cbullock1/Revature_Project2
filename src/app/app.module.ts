import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './page/home/home.component';
import { NotfoundComponent } from './page/notfound/notfound.component';
import { HeaderComponent } from './components/header/header.component';
import { RegisterComponent } from './components/user/register/register.component';
import { LoginComponent } from './components/user/login/login.component';
import { OrderStatusComponent } from './components/user/order-status/order-status.component';
import { OrderHistoryComponent } from './components/user/order-history/order-history.component';
import { LogoutComponent } from './components/user/logout/logout.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MenuCategoriesComponent } from './components/menu-categories/menu-categories.component';
import { MenuItemDisplayComponent } from './components/menu-item-display/menu-item-display.component';
import { MenuPageComponent } from './page/menu-page/menu-page.component';
import { MenuSideBarComponent } from './components/menu-side-bar/menu-side-bar.component';
import { LoginPageComponent } from './page/login-page/login-page.component';
import { RegisterPageComponent } from './page/register-page/register-page.component';
import { OrderHistoryPageComponent } from './page/order-history-page/order-history-page.component';
import { OrderStatusPageComponent } from './page/order-status-page/order-status-page.component';
import { LogoutPageComponent } from './page/logout-page/logout-page.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NotfoundComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    OrderStatusComponent,
    OrderHistoryComponent,
    MenuCategoriesComponent,
    MenuItemDisplayComponent,
    MenuPageComponent,
    MenuSideBarComponent,
    LoginPageComponent,
    RegisterPageComponent,
    OrderHistoryPageComponent,
    OrderStatusPageComponent,
    LogoutPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
