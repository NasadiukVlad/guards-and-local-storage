import {Component} from '@angular/core';
import {ComponentCanDeactivate} from '../../../core/guards/away.guard';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements ComponentCanDeactivate {

  public canDeactivate(): (Observable<boolean> | Promise<boolean> | boolean) {
    return confirm('Are you sure you want to navigate?');
  }
}

