import { Injectable } from '@angular/core';
import { ERPModule } from './Interfaces/erpmodule.interface';
import { OrganizationSignupDetails } from './Interfaces/OrganizationDetails.interface';
import { MasterDataService } from './master-data.service';

@Injectable({
  providedIn: 'root'
})
export class LandingPageDataService {

  constructor(private _masterdata:MasterDataService) { }
  modules: ERPModule[] = this._masterdata.modules;
  private organizationDetails: any;
  SelectedModuleid: number = 999;

  //-------------------------------------------set methods----------------------------------------------------------------------
  
  setOrganizationDetails(details: OrganizationSignupDetails) {
    this.organizationDetails = details;
  }

  setModules(modules: ERPModule[]) {
    this.modules = modules;
  }
  setSelectedModule(id: number) {
    this.SelectedModuleid = id;
  }
  //-------------------------------------------get methods----------------------------------------------------------------------
  getOrganizationName() {
    return this.organizationDetails ? this.organizationDetails.organizationName : '';
  }

  getModules() {
    return this.modules;
  }

  getSelectedModule() {
    return this.SelectedModuleid;
  }
}
