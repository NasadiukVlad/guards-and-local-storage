import {Injectable} from '@angular/core';
import {CanDeactivate} from '@angular/router';
import {Observable} from 'rxjs';

export interface ComponentCanDeactivate {
  canDeactivate: ()
    => Observable<boolean>
    | Promise<boolean> | boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AwayGuard
  implements CanDeactivate<ComponentCanDeactivate> {

  public canDeactivate(component: ComponentCanDeactivate):
    Observable<boolean> | Promise<boolean> | boolean {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}



