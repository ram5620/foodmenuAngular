import { Component } from '@angular/core';
import { Foodclass } from '../foodclass';
import { Foodservice } from '../foodservice';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink  } from '@angular/router';



@Component({
  selector: 'app-foodcreate',
  imports: [FormsModule, RouterLink],
  templateUrl: './foodcreate.html',
  styleUrl: './foodcreate.css',
  providers:[Foodservice]
})





export class Foodcreate {

foodobj = new Foodclass("",0,"");

constructor(private fserviceobj:Foodservice,private routerobj:Router) {}



savedata()

{

this.fserviceobj.insertdata(this.foodobj).subscribe({

next:()=>{this.routerobj.navigateByUrl("/");},
error:(err)=>{console.log(err);}

});


}

}
