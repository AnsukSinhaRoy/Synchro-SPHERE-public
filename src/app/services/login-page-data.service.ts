import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginPageDataService {

  constructor() { }

  userData: any;
  ;

  initializeUserData() {
    this.userData = {
      "userId": "user123",
      "organizationId": "org123",
      "module_access_to_org": [
        "CRM",
        "Finance",
      ],
      "module_access_to_user": [
        "CRM",
      ],
      "role": {
        "name": "admin",
        "permission": {
          "configure": true,
          "create": true,
          "read": true,
          "update": true,
          "delete": true,
        }
      },
      "mode": "dashboard",
    };
    console.log('userdarta was innitialized ',this.getUserData())
  }
  getUserData() {
    return this.userData ? this.userData : '';
  }
}
