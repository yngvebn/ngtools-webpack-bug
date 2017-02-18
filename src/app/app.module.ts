import { NgModule, Inject, ApplicationRef } from '@angular/core';
import { AppComponent } from './app.component';

const entryComponents: any[] = [
    AppComponent
]

@NgModule({
    imports: [],
    declarations: [
        AppComponent,
    ],
    bootstrap: [
        AppComponent
    ],
    providers: []
})
export class AppModule {}