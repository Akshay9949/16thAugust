import { GetcustomerService } from './../getcustomer.service';

import { Subscription } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Component,OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit  {

  data:Array<any>;
  result;
  constructor(private http:HttpClient,private gc:GetcustomerService, private router: Router){
    this.data=Array<any>();
  }
  customerslist=[];
  ngOnInit(){
    this.gc.customers().subscribe((data=>this.customerslist=data)) 
  }

  get(phone){
    // alert(phone);
    this.router.navigate(["/userdetails", phone]);
  }
  }

