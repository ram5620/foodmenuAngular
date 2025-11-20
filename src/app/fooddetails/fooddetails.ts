import { Component } from '@angular/core';
import {ActivatedRoute,Router ,RouterLink } from '@angular/router';
import { Foodservice } from '../foodservice';
import { Foodclass } from '../foodclass';

@Component({
  selector: 'app-fooddetails',
  imports: [RouterLink],
  templateUrl: './fooddetails.html',
  styleUrl: './fooddetails.css',
  providers:[Foodservice]
})


export class Fooddetails {

public foodclassobj = new Foodclass("",0,"");
private id:number = 0;

constructor(private fserviceobj:Foodservice,
   private activatedrouteobj:ActivatedRoute,
   private routerobj:Router
)
{
   this.id = this.activatedrouteobj.snapshot.params["id"];
   this.fserviceobj.selectdatabyid(this.id).subscribe({
    next:(dt)=>{this.foodclassobj = dt;},
    error:(err)=>{console.log(err);}
     });

}


removedata()  {
  let conf = confirm("Are you sure to delete");
  if(conf)
{

this.fserviceobj.deletedata(this.id).subscribe({ 
        next:()=>{this.routerobj.navigateByUrl("/");},
        error:(err)=>{console.log(err);}
        });


}

}


}
