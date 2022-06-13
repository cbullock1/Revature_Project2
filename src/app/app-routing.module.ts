import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import { OrderHistoryComponent } from './components/user/order-history/order-history.component';
import { HomeComponent } from './page/home/home.component';
import { LoginPageComponent } from './page/login-page/login-page.component';
import { LogoutPageComponent } from './page/logout-page/logout-page.component';
import { MenuPageComponent } from './page/menu-page/menu-page.component';
import { NotfoundComponent } from './page/notfound/notfound.component';
import { OrderStatusPageComponent } from './page/order-status-page/order-status-page.component';
import { RegisterPageComponent } from './page/register-page/register-page.component';


const routes : Routes = [
 {path: '', redirectTo:'home', pathMatch:'full'},
 {path:'home', component:HomeComponent},
 {path:'menu', component:MenuPageComponent},
 {path:'menu/:menuCatId', component:MenuPageComponent},
 {path:'login', component:LoginPageComponent},
 {path:'logout', component:LogoutPageComponent},
 {path:'register', component:RegisterPageComponent},
 {path:'history', component:OrderHistoryComponent},
 {path:'status', component:OrderStatusPageComponent},
 {path: '**', component:NotfoundComponent}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{

}