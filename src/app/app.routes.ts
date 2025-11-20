import { Routes } from '@angular/router';
import { Foodcreate } from './foodcreate/foodcreate';
import { Fooddetails } from './fooddetails/fooddetails';
import { Foodedit } from './foodedit/foodedit';
import { Foodlist } from './foodlist/foodlist';
import { App } from './app';





export const routes: Routes = [

  
  
  
  { path: 'list', component: Foodlist },
  { path: 'foodcreate', component: Foodcreate },
  { path: 'foodedit/:id', component: Foodedit },
  { path: 'fooddetails/:id', component: Fooddetails },
  { path: '', component: Foodlist }

  


];
