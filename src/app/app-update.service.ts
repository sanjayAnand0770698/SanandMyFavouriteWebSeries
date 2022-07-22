import { ApplicationRef, Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { concat, interval } from 'rxjs';
import { first, switchMap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AppUpdateService {

  constructor(appRef: ApplicationRef, public updates: SwUpdate, public snackBar: MatSnackBar) {
    // Allow the app to stabilize first, before starting
    // polling for updates with `interval()`.
    const appIsStable$ = appRef.isStable.pipe(first(isStable => isStable === true));
    const everySixHours$ = interval(6 * 60 * 60 * 1000);
    const everySixHoursOnceAppIsStable$ = concat(appIsStable$, everySixHours$);

    everySixHoursOnceAppIsStable$.subscribe(() => {
      updates.checkForUpdate();
    });
  }

  public openSnackbar(): void {
    this.updates.available.subscribe(event => {
      const snack = this.snackBar.open('New update available!', 'Reload');
      snack.onAction().pipe(switchMap(() => this.updates.activateUpdate())).subscribe(() => {
        window.location.reload();
      });
      setTimeout(() => {
        snack.dismiss();
      }, 6000);
    });
  }
}
