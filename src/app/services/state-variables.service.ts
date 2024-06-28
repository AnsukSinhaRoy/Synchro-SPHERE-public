import { Injectable } from '@angular/core';
import { MasterDataService } from './master-data.service';
import { ERPModule } from './Interfaces/erpmodule.interface';

@Injectable({
  providedIn: 'root'
})
export class StateVariablesService {

  constructor(private _masterdata:MasterDataService) { 
    
  }
  
  public modules: ERPModule[] = this._masterdata.modules;
  public organizationDetails: any;
  public SelectedModuleid: number = -99;
  public selectedModules: number[] =[];
}
