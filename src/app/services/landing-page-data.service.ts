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
  SelectedModule: string = '';

  //-------------------------------------------set methods----------------------------------------------------------------------
  
  setOrganizationDetails(details: OrganizationSignupDetails) {
    this.organizationDetails = details;
    console.log("Org DETAILS in data service: ", this.organizationDetails);
  }

  setModules(modules: ERPModule[]) {
    this.modules = modules;
    console.log('modules set to Landing page data service is:', this.modules)
  }
  setSelectedModule(name: string) {
    this.SelectedModule = name;
  }

  //-------------------------------------------get methods----------------------------------------------------------------------
  getOrganizationName() {
    return this.organizationDetails ? this.organizationDetails.organizationName : '';
  }

  getModules() {
    return this.modules;
  }

  getSelectedModule() {
    return this.SelectedModule;
  }
}
