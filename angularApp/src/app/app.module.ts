import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { SingleNoteComponent } from './single-note/single-note.component';


@NgModule({
  declarations: [
    AppComponent,
    AddNoteComponent,
    SingleNoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
