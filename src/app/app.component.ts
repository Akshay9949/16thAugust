import { GetcustomerService } from './getcustomer.service';

import { Subscription } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Component} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assessment';
  constructor(){}
  
  // data:Array<any>;
  // result;
  // constructor(private http:HttpClient,private gc:GetcustomerService){
  //   this.data=Array<any>();
  // }
  // customerslist=[];
  // getcustomers(){
  //   this.gc.customers().subscribe((data=>this.customerslist=data)) 
  // }
  //  details=[];
  // getdetails(){
  //   this.gc.details().subscribe((data=>this.details=data))
  // }

}


