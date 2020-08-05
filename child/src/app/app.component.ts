import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ExampleComponent } from '@cjdreiss/ts-import-error-parent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'child';
  testing2: Directive;
  test: Observable<any>; // won't auto import at first
  // test2: BehaviorSubject<any>; // won't auto import even though there is an rxjs import already...
  parent: ExampleComponent; // auto imports because @cjdreiss/ts-import-error-parent is in package.json

}
