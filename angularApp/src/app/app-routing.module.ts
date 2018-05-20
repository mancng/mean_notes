import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingleNoteComponent } from './single-note/single-note.component';
import { AddNoteComponent } from './add-note/add-note.component';

const routes: Routes = [
  { path: '', component: SingleNoteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
