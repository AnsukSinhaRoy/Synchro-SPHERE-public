import { Inject, Injectable } from '@angular/core';
import { ERPModule } from './Interfaces/erpmodule.interface';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterDataService {
  private baseUrl = 'https://blessed-ostrich-sadly.ngrok-free.app';
  
  private headers = new HttpHeaders({ 'ngrok-skip-browser-warning': '69420' });
  modules: ERPModule[] = [];

  constructor(@Inject(HttpClient) private http: HttpClient) {
    this.fetchModules();
  }

  fetchModules() {
    const headers = this.headers;
    this.http.get<ERPModule[]>(`${this.baseUrl}/modules`, { headers })
      .subscribe(
        (data: ERPModule[]) => {
          this.modules = data;
          console.log("came from Database:");
          console.log(this.modules);
        },
        (error: any) => {
          console.error('Error fetching modules:', error);
        }
      );
  }

  fetchsubmodules(moduleName: string): Observable<any> {
    const headers = this.headers;
    const params = new HttpParams().set('module_name', moduleName);
    return this.http.get<any>(`${this.baseUrl}/submoduledata`, { headers, params });
  }
}
