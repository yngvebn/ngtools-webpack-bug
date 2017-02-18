import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: 'app.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
    constructor() {
    }
}