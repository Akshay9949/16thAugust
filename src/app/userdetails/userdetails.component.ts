import { GetcustomerService } from './../getcustomer.service';
import { HttpClient,HttpClientModule} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { Customer } from '../customer';
@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
data:Array<any>;
phone: string;
  constructor(private http:HttpClient,private gc:GetcustomerService,private route: ActivatedRoute) { 
    this.route.params.subscribe((params: Params) => this.phone = params['phone']);
    this.data=Array<any>();
    this.http.get<Customer[]>("http://127.0.0.1:4004/details/"+this.phone).subscribe(data=>this.details=data);
  }

  ngOnInit(): void {
    
  }
  details;
// get(phone:string){
//   this.http.get<Customer[]>("http://127.0.0.1:4004/details"+this.phone).subscribe(data=>this.details=data)
// }
}
//  get(){
//     this.gc.sendGetRequest(this.phone).subscribe(response=>{
//         console.log(response);
//         let jsonObj = JSON.parse(JSON.stringify(response));
//         this.details = jsonObj.cust_name + ' - ' + jsonObj.phone;
//   });
//  }


