import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { StatusBarComponent } from '../components/status-bar/status-bar.component';

@Injectable({ providedIn: 'root' })
export class AlertService {

    queue: Function[] = [];
    onMessage: boolean = false;

    constructor( private snackbar: MatSnackBar ) {}

    success(message: string, timeout: number = 3000) {
        this.queue.push(
            () => this.snackbar.openFromComponent(StatusBarComponent, { duration: timeout, panelClass: ['status-bar', 'success'], data: { icon: 'check', message } })
        );
        if( !this.onMessage ) this.showNext();
    }

    error(message: string, timeout: number = 3000) {
        this.queue.push(
            () => this.snackbar.openFromComponent(StatusBarComponent, { duration: timeout, panelClass: ['status-bar', 'error'], data: { icon: 'close', message } })
        );
        if( !this.onMessage ) this.showNext();
    }

    info(message: string, timeout: number = 3000) {
        this.queue.push(
            () => this.snackbar.openFromComponent(StatusBarComponent, { duration: timeout, panelClass: ['status-bar', 'info'], data: { icon: 'sms', message } })
        );
        if( !this.onMessage ) this.showNext();
    }

    warning(message: string, timeout: number = 3000) {
        this.queue.push(
            () => this.snackbar.openFromComponent(StatusBarComponent, { duration: timeout, panelClass: ['status-bar', 'warning'], data: { icon: 'priority_high', message } })
        );
        if( !this.onMessage ) this.showNext();
    }

    showNext() {
        this.onMessage = true;
        const msg = this.queue.shift();
        if( msg ) {
            msg().afterDismissed().subscribe( () => this.showNext() );
        } else {
            this.onMessage = false;
        }
    }
}
