import { Component, OnInit, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
    selector: 'app-status-bar',
    templateUrl: './status-bar.component.html',
    styleUrls: ['./status-bar.component.scss']
})
export class StatusBarComponent implements OnInit {

    constructor(
        public ref: MatSnackBarRef<StatusBarComponent>,
        @Inject(MAT_SNACK_BAR_DATA) public data: any
    ) {}

    ngOnInit(): void {}

}
