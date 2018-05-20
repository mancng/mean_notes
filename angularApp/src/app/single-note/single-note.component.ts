import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-single-note',
  templateUrl: './single-note.component.html',
  styleUrls: ['./single-note.component.css']
})
export class SingleNoteComponent implements OnInit {

  newNote: object = {noteContent: ""};
  notes: any[] = [];

  constructor(private _httpService: HttpService) { }

  ngOnInit(){
    this.getNotesFromService()
  }

  getNotesFromService(){
    let observable = this._httpService.getNotes()
    observable.subscribe((data: any) => {
      console.log("Got the data", data)
      this.notes = data.notes;
    });
  }

  addNote(){
    this._httpService.addNotes(this.newNote)
    .subscribe((responseData:any)=>{
      console.log('responseData', responseData);
      this.newNote = {noteContent: ""};
      this.getNotesFromService();
    });
  }



}
