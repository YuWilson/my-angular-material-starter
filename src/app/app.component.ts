import { Component, Inject, ViewChild } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatBottomSheetRef, MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { AlertService } from './shared/angular-material/snake-bar-module/services/alert.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

    // THEME SETTING
    storage_key = 'theme_light';
    light_theme = true;
    theme = 'light-theme';

    radio = '';
    fruits = [];

    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

    constructor( private overlayContainer: OverlayContainer,
                 private _bottomSheet: MatBottomSheet,
                 private dialog: MatDialog,
                 private alert: AlertService ){
        this.overlayContainer.getContainerElement().classList.remove(this.theme);
        if( localStorage && localStorage.getItem(this.storage_key) ) {
            this.light_theme = !!parseInt(localStorage.getItem(this.storage_key));
            this.theme = this.light_theme ? 'light-theme' : 'dark-theme';
        }
        document.body.classList.add(this.theme);
        this.overlayContainer.getContainerElement().classList.add(this.theme);
    }

    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

    

    ngOnInit() {
        this.dataSource.paginator = this.paginator;
    }

    onChangeTheme() {
        localStorage.setItem(this.storage_key, (this.light_theme ? 1 : 0) + '');
        const originalTheme = this.theme;
        this.theme = this.light_theme ? 'light-theme' : 'dark-theme';
        this.overlayContainer.getContainerElement().classList.remove(originalTheme);
        this.overlayContainer.getContainerElement().classList.add(this.theme);
        document.body.classList.remove(originalTheme);
        document.body.classList.add(this.theme);
    }

    addChip(event: MatChipInputEvent): void {
        const input = event.input;
        const value = event.value;
    
        // Add our fruit
        if ((value || '').trim()) {
          this.fruits.push(value);
        }
    
        // Reset the input value
        if (input) {
          input.value = '';
        }
    }
    
    removeChip(fruit): void {
        const index = this.fruits.indexOf(fruit);
    
        if (index >= 0) {
          this.fruits.splice(index, 1);
        }
    }

    openBottomSheeet() {
        this._bottomSheet.open(BottomSheetOverviewExampleSheet);
    }
    
    openDialog(): void {
        const dialogRef = this.dialog.open(DialogExampleComponent, {
          width: '450px',
          data: {name: 'wilson'}
        });
    
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed', result);
        });
    }

    openSnackbar(type: string) {
        switch(type) {
            case 'success':
                this.alert.success('Success\nMessage');
                break;
            case 'error':
                this.alert.error('Error\nMessage');
                break;
            case 'info':
                this.alert.info('Info\nMessage');
                break;
            case 'warning':
                this.alert.warning('Warning\nMessage');
                break;
        }
    }

}

@Component({
    selector: 'bottom-sheet-overview-example-sheet',
    template: `
    <mat-nav-list>
        <a href="https://keep.google.com/" mat-list-item (click)="openLink($event)">
            <span mat-line>Google Keep</span>
            <span mat-line>Add to a note</span>
        </a>
    
        <a href="https://docs.google.com/" mat-list-item (click)="openLink($event)">
            <span mat-line>Google Docs</span>
            <span mat-line>Embed in a document</span>
        </a>
    
        <a href="https://plus.google.com/" mat-list-item (click)="openLink($event)">
            <span mat-line>Google Plus</span>
            <span mat-line>Share with your friends</span>
        </a>
    
        <a href="https://hangouts.google.com/" mat-list-item (click)="openLink($event)">
            <span mat-line>Google Hangouts</span>
            <span mat-line>Show to your coworkers</span>
        </a>
    </mat-nav-list>
    `,
})
export class BottomSheetOverviewExampleSheet {
    constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>) {}
  
    openLink(event: MouseEvent): void {
      this._bottomSheetRef.dismiss();
      event.preventDefault();
    }
}

@Component({
    selector: 'dialog-example-component',
    template: `
    <h1 mat-dialog-title>Hi {{ data.name }}</h1>
    <div mat-dialog-content>
        Example Hello
    </div>
    <div mat-dialog-actions align="end">
        <button mat-stroked-button mat-dialog-close>No Thanks</button>
        <button mat-stroked-button color="primary" [mat-dialog-close]="true" cdkFocusInitial>Ok</button>
    </div>
    `,
})
export class DialogExampleComponent {
    constructor(
        public dialogRef: MatDialogRef<DialogExampleComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) {}
    
    onNoClick(): void {
        this.dialogRef.close();
    }
}

export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
  
const ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
    {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
    {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
    {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
    {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
    {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
    {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
    {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
    {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
    {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];