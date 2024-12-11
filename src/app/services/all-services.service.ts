import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AllServicesService {

  constructor(public http:HttpClient) { }

  getTableData(){
    return this.http.get<any>('../../../assets/json/data.json')
  }
}
