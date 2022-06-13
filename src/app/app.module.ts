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

@NgModule({
  declarations: [
    AppComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
