import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Foodservice } from '../foodservice';
import { Foodclass } from '../foodclass';



@Component({
  selector: 'app-foodlist',
  imports: [RouterLink],
  templateUrl: './foodlist.html',
  styleUrl: './foodlist.css',
  providers:[Foodservice]
})




export class Foodlist {

ar:Foodclass[] = [];

constructor(private fserviceobj:Foodservice)
{

  this.getdata();

}


getdata()
{

   this.fserviceobj.selectdata().subscribe({

   next:(dt)=>{this.ar = dt;},
   error:(err)=>{console.log(err);}


   });

}



}
