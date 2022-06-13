import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormControl,FormsModule}      from '@angular/forms';
import { AppComponent } from './app.component';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { OrderStatusComponent } from './user/order-status/order-status.component';
import { OrderHistoryComponent } from './user/order-history/order-history.component';
import { LogoutComponent } from './user/logout/logout.component';
import { HttpClientModule  } from '@angular/common/http'
import { MenuCategoriesComponent } from './Components/menu-categories/menu-categories.component';
import { MenuItemDisplayComponent } from './Components/menu-item-display/menu-item-display.component';
import { MenuSideBarComponent } from './Components/menu-side-bar/menu-side-bar.component';
import { MenuPageComponent } from './Pages/menu-page/menu-page.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    OrderStatusComponent,
    OrderHistoryComponent,
    LogoutComponent,
    MenuCategoriesComponent,
    MenuItemDisplayComponent,
    MenuSideBarComponent,
    MenuPageComponent
    
    
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
