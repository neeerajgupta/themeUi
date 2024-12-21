import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '@angular/router';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllServicesService {

  constructor(public http: HttpClient) { }

  getData() {
    return this.http.get<any>('../../../assets/json/data.json')
  }
  getTableData() {
    return this.http.get<any>('../../../assets/json/data.json').toPromise()
      .then(res => <Data[]>res.data)
      .then(data => { return data; });

  }

  getChartData() {
    return this.http.get<any>('../../../assets/json/chartvalue.json');
      

  }

  getdeliveryData() {
    return this.http.get<any>('../../../assets/json/pro.json');
     

  }

}
