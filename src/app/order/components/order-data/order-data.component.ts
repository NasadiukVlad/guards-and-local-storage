import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-order-data',
  templateUrl: './order-data.component.html',
  styleUrls: ['./order-data.component.scss']
})
export class OrderDataComponent implements OnDestroy {

  private currentId;

  constructor(private activatedRoute: ActivatedRoute) {

    this.activatedRoute.params.subscribe((param: any) => {
      this.currentId = param['id'];
    });
  }

  public ngOnDestroy() {
    alert('Destroyed id: ' + this.currentId);
  }

}
