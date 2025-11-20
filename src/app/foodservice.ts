import { Injectable } from '@angular/core';
import { Foodclass } from './foodclass';
import { HttpClient } from '@angular/common/http';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})



export class Foodservice

{
 
  
turl:string="http://localhost:3000/fooditems";

constructor(private httpobj:HttpClient){}


public insertdata (foodobj:Foodclass)

{
  
  let jdata = JSON.stringify(foodobj);
  
  return this.httpobj.post(this.turl,jdata);

}

public updatedata (foodobj:Foodclass)

{
  
  let url = this.turl+"/"+foodobj.id;

  let jdata = JSON.stringify(foodobj);
  
  return this.httpobj.put(url,jdata);

}



public deletedata (id:number)

{
  
  let url = this.turl+"/"+id;

  return this.httpobj.delete(url);

}

public selectdata()
{

  return this.httpobj.get<Foodclass[]>(this.turl);

}




public selectdatabyid (id:number)
{
  let url = this.turl+"/"+id;
  return this.httpobj.get<Foodclass>(url);
  
}

}


