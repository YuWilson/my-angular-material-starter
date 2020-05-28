import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusBarComponent } from './components/status-bar/status-bar.component';
import { AlertService } from './services/alert.service';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';


@NgModule({
    declarations: [ StatusBarComponent ],
    imports: [ CommonModule, MatIconModule, MatSnackBarModule ],
    providers: [ AlertService, { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 3000, verticalPosition: 'bottom', horizontalPosition: 'right' } } ],
    entryComponents: [ StatusBarComponent ]
})
export class SnakeBarModuleModule { }
