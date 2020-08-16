import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Customers ,Customer} from './customer';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetcustomerService {

  constructor(private http:HttpClient) { }
  customers():Observable<Customers[]>
  {
    let url="http://127.0.0.1:4004/customers";
    return this.http.get<Customers[]>(url);
  }
    phone:string;
    url="http://127.0.0.1:4004/details";
    public sendGetRequest(key) {
      return this.http.get<Customer[]>(this.url+key);
    }




  details():Observable<Customer[]>
  {
    const url="http://127.0.0.1:4004/details"+this.phone;
    return this.http.get<Customer[]>(url);
  }

}
