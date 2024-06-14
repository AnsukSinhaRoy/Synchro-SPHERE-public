import { Inject, Injectable } from '@angular/core';
import { ERPModule } from './Interfaces/erpmodule.interface';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterDataService {
  modules: ERPModule[] = [];

  constructor(@Inject(HttpClient) private http: HttpClient) {
    this.fetchModules();
  }

  fetchModules() {
    const headers = new HttpHeaders({
      "ngrok-skip-browser-warning": "69420"
    });
    this.http.get<ERPModule[]>(`https://blessed-ostrich-sadly.ngrok-free.app/modules`, { headers })
      .subscribe(
        (data: ERPModule[]) => {
          this.modules = data;
          console.log("came from Database:")
          console.log(this.modules)
        },
        (error: any) => {
          console.error('Error fetching modules:', error);
        }
      );
  }

  fetchsubmodules(moduleName: string): Observable<any> {
    const headers = new HttpHeaders({
      "ngrok-skip-browser-warning": "69420"
    });

    // Add module_name as a query parameter
    const params = new HttpParams().set('module_name', moduleName);

    return this.http.get<any>(`https://blessed-ostrich-sadly.ngrok-free.app/crmdata`, { headers, params });
  }

}