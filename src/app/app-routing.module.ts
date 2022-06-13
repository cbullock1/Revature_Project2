import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import { MenuCategoriesComponent } from './Components/menu-categories/menu-categories.component';
import { MenuPageComponent } from './Pages/menu-page/menu-page.component';
import { LoginComponent } from './user/login/login.component';
import { LogoutComponent } from './user/logout/logout.component';
import { OrderHistoryComponent } from './user/order-history/order-history.component';
import { OrderStatusComponent } from './user/order-status/order-status.component';
import { RegisterComponent } from './user/register/register.component';


const routes : Routes = [
 {path: '', redirectTo:'home', pathMatch:'full'},
 {path:'home', component:MenuCategoriesComponent},
 {path:'menu', component:MenuPageComponent},
 {path:'menu/:menuCatId', component:MenuPageComponent},
 {path:'login', component:LoginComponent},
 {path:'loggout', component:LogoutComponent},
 {path:'register', component:RegisterComponent},
 {path:'order-history', component:OrderHistoryComponent},
 {path:'order-status', component:OrderStatusComponent}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{

}