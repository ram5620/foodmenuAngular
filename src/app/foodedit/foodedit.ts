import { Component } from '@angular/core';
import { ActivatedRoute,Router, RouterLink, RouterLinkWithHref } from '@angular/router';
import { Foodservice } from '../foodservice';
import { Foodclass } from '../foodclass';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-foodedit',
  imports: [FormsModule,RouterLink],
  templateUrl: './foodedit.html',
  styleUrl: './foodedit.css',
  providers:[Foodservice]
  
})



export class Foodedit {

public foodobj = new Foodclass("",0,"");

private id:number = 0;

constructor(private fserviceobj:Foodservice,private activatedrouteobj:ActivatedRoute,
private routerobj:Router)

{
this.id = this.activatedrouteobj.snapshot.params["id"];
this.fserviceobj.selectdatabyid(this.id).subscribe({
next:(dt)=>{this.foodobj = dt;},
error:(err)=>{console.log(err);}

});

}

savedata()

{

this.fserviceobj.updatedata(this.foodobj).subscribe({

next:()=>{this.routerobj.navigateByUrl("/");},
error:(err)=>{console.log(err);}

});


}

}







