import { Inject, Injectable } from '@angular/core';
import { ERPModule } from './Interfaces/erpmodule.interface';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterDataService {
  private baseUrl = 'https://blessed-ostrich-sadly.ngrok-free.app';
  //private baseUrl = 'http://127.0.0.1:8000';
  private headers = new HttpHeaders({ 'ngrok-skip-browser-warning': '69420' });
  modules: ERPModule[] = [];

  constructor(@Inject(HttpClient) private http: HttpClient) {
  }


  fetchsubmodules(moduleName: string): Observable<any> {
    const headers = this.headers;
    const params = new HttpParams().set('module_name', moduleName);
    const path = '/submoduledata'
    return this.http.get<any>(`${this.baseUrl + path}`, { headers, params });
  }

  public makegetApiCall<T>(path: string, params?: HttpParams): Observable<T> {
    const url = `${this.baseUrl}${path}`;
    return this.http.get<T>(url, { headers: this.headers, params });
  }

  public makePostApiCall<T>(path: string, body: any, params?: HttpParams): Observable<T> {
    const url = `${this.baseUrl}${path}`;
    return this.http.post<T>(url, body, { headers: this.headers, params });
  }
}
