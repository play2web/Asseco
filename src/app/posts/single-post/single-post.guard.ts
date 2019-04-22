import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

/**
 * This will guard route
 */
@Injectable()
export class SinglePostGuard implements CanActivate {

  constructor() { }

  /**
   * Returns whether or not user can see history screen
   */
  canActivate(): boolean {
    return true;
  }
}
