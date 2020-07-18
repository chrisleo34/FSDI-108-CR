import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // tslint:disable-next-line: no-trailing-whitespace
  
  private userList = [];

  constructor() {}


  // tslint:disable-next-line: typedef
  public saveUser(user) {
    this.userList.push(user);
  }


  // tslint:disable-next-line: typedef
  public getAllUsers() {
    return this.userList;
  }


  // tslint:disable-next-line: typedef
  public removeItem(index: any) {
    // remove the array
  }
}
