import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatIconModule} from '@angular/material/icon';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule,MatButtonModule,MatFormFieldModule
  ,MatRippleModule,MatProgressBarModule} from '@angular/material';

  //import {AddDialogComponent} from './dialogs/add/add.dialog/add.dialog.component';
  //import {EditDialogComponent} from './dialogs/edit/edit.dialog/edit.dialog.component';
  //import {DeleteDialogComponent} from './dialogs/delete/delete.dialog/delete.dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    //AddDialogComponent,
    //EditDialogComponent,
    //DeleteDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
MatFormFieldModule,
MatInputModule,
MatRippleModule,
MatTableModule,
BrowserAnimationsModule,
MatPaginatorModule,
    MatIconModule,
    MatProgressBarModule,
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatIconModule,
    MatProgressBarModule,
  ],  entryComponents: [
    //AddDialogComponent,
    //EditDialogComponent,
    //DeleteDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
