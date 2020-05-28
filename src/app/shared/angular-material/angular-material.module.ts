import { NgModule } from '@angular/core';

/* Custom Modules */
import { SnakeBarModuleModule } from './snake-bar-module/snake-bar-module.module';

/* Angular Materials */
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatChipsModule } from '@angular/material/chips';
import { MatSliderModule } from '@angular/material/slider';
import { MatProgressSpinnerModule, MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatDialogModule } from '@angular/material/dialog';

const modules = [ 
    MatCardModule, MatButtonModule, MatCheckboxModule, 
    MatToolbarModule, MatFormFieldModule, MatInputModule, 
    MatSelectModule, MatIconModule, MatTableModule, 
    MatPaginatorModule, MatSortModule, MatSidenavModule, 
    MatSlideToggleModule, MatRadioModule, MatDividerModule,
    MatListModule, MatMenuModule, MatChipsModule,
    MatSliderModule, MatButtonToggleModule,MatProgressSpinnerModule,
    MatProgressBarModule, MatBottomSheetModule, MatDialogModule,
    SnakeBarModuleModule ];

@NgModule({
    imports: modules,
    exports: modules,
    declarations: [],
    providers: [
        {
            provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
            useValue: {
                floatLabel: 'auto',
                appearance: 'outline'
            }
        },
        {
            provide: MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS,
            useValue: {
                strokeWidth: 2,
                diameter: 16
            }
        }
    ],
})
export class AngularMaterialModule { }
