import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { LivingComponent } from './living/living.component';
import { BedComponent } from './bed/bed.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { DiningComponent } from './dining/dining.component';
import { lockGuard } from './Guards/lock.guard';
import { logoutGuard } from './Guards/logout.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FavouritesComponent } from './favourites/favourites.component';

const routes: Routes = [
  {path:'', redirectTo:'signup', pathMatch:'full'},
  {path:'signup', component:SignupComponent, title:'Signup', canActivate:[logoutGuard]},
  {path:'signin', component:SigninComponent, title:'Signin', canActivate:[logoutGuard]},
  {path:'home', component:HomeComponent,title:'Home', canActivate: [lockGuard]},
  {path:'living', component:LivingComponent,title:'Living Room',canActivate: [lockGuard]}, 
  {path:'favourites', component:FavouritesComponent, title:'favourites',canActivate: [lockGuard]},
  {path:'bed', component:BedComponent,title:'Bedroom',canActivate: [lockGuard]},
  {path:'kitchen', component:KitchenComponent,title:'Kitchen',canActivate: [lockGuard]},
  {path:'dining', component:DiningComponent,title:'Dining',canActivate: [lockGuard]},
  {path:'**', component:PageNotFoundComponent,title:'Error page',canActivate: [lockGuard]}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
