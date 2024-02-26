import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private snackBar: MatSnackBar) {}

  showMessage(message: string): void {
    const THREE_SECONDS_IN_MS = 3000;
    this.snackBar.open(message, '❌', {
      duration: THREE_SECONDS_IN_MS,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
}
