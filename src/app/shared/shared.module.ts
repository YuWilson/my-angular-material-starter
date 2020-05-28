import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularMaterialModule } from './angular-material/angular-material.module';


@NgModule({
    imports: [AngularMaterialModule, FormsModule],
    exports: [AngularMaterialModule, FormsModule],
    declarations: [],
    providers: [],
})
export class SharedModule { }
