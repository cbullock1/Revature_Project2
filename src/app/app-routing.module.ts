import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import { MenuCategoriesComponent } from './menu-categories/menu-categories.component';
import { MenuPageComponent } from './menu-page/menu-page.component';

const routes : Routes = [
 {path: '', redirectTo:'home', pathMatch:'full'},
 {path:'home', component:MenuCategoriesComponent},
 {path:'menu', component:MenuPageComponent},
 {path:'menu/:menuCatId', component:MenuPageComponent}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{

}