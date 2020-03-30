import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthStorageService {

  private permissions: string[] = [
    'can_write',
    'c'
  ];

  constructor() { }

  getPermissions() {
    return this.permissions;
  }
}
