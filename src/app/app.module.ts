import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, BottomSheetOverviewExampleSheet, DialogExampleComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { OverlayContainer } from '@angular/cdk/overlay';


@NgModule({
    declarations: [
        AppComponent, BottomSheetOverviewExampleSheet, DialogExampleComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        SharedModule,
        FlexLayoutModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(overlayContainer: OverlayContainer) {
        overlayContainer.getContainerElement().classList.add('light-theme');
    }
}
