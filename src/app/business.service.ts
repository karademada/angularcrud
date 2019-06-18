import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  uri = 'http://localhost:4000/business';

  constructor(private http: HttpClient) { }

  addBusiness(person_name, business_name, business_gst_number) {
    const obj = {
      person_name,
      business_name,
      business_gst_number,
    };
    return this.http.post(`${this.uri}/add`, obj);
  }

  getBusinesses() {
    return this
      .http
      .get(`${this.uri}`);
  }

  editBusiness(id) {
    return this
      .http
      .get(`${this.uri}/edit/${id}`);
  }

  updateBusiness(person_name: string, business_name: string, business_gst_number: number, id: number) {
    const obj = {
      person_name,
      business_name,
      business_gst_number,
    };
    return this
      .http
      .post(`${this.uri}/update/${id}`, obj);
  }

  deleteBusiness(id: number) {
    return this
            .http
            .get(`${this.uri}/delete/${id}`);
  }
}
