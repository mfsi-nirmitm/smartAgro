import { Component, ViewContainerRef } from '@angular/core';
import { SpinnyService } from './shared/spinny/spinny.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private _spinnyService: SpinnyService,
    private _vcRef: ViewContainerRef,
  ) {
    _spinnyService.defaultViewContainer = _vcRef;
  }
}
