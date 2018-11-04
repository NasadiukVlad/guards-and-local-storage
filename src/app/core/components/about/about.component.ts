import {Component} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ComponentCanDeactivate} from '../../guards/away.guard';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements ComponentCanDeactivate {

  private firstQueryParam: string;
  private secondQueryParam: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.subscribeForActiveRouteParams();
    alert(`First param: ${this.firstQueryParam}`);
    alert(`Second param: ${this.secondQueryParam}`);
  }

  public canDeactivate(): (Observable<boolean> | Promise<boolean> | boolean) {
    return confirm('Are you sure you want to navigate?');
  }

  public onNavigate() {
    this.router.navigate(['']);
  }

  public subscribeForActiveRouteParams() {
    this.activatedRoute.queryParams.subscribe((queryParams: Params) => {
      this.firstQueryParam = queryParams['customQuery'];
      this.secondQueryParam = queryParams['secondQueryParam'];
    });
  }
}


