import { Inject, Injectable } from '@angular/core';
import { ERPModule } from './Interfaces/erpmodule.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MasterDataService {
  modules: ERPModule[] = [];

  constructor(@Inject(HttpClient) private http: HttpClient) {
    this.fetchModules();
    
  }

  fetchModules(){
    const headers = new HttpHeaders({
      "ngrok-skip-browser-warning": "69420"
    });

    this.http.get<ERPModule[]>('https://blessed-ostrich-sadly.ngrok-free.app/modules', { headers })
      .subscribe(
        (data: ERPModule[]) => {
          this.modules = data;
          console.log(this.modules)
        },
        (error: any) => {
          console.error('Error fetching modules:', error);
        }
      );
  }
}
