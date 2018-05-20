import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {

  newNote: object = {noteContent: ""};

  constructor(private _route: ActivatedRoute, private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
  }

  addNote(){
    this._httpService.addNotes(this.newNote)
    .subscribe((responseData:any)=>{
      console.log('responseData', responseData);
      this._router.navigate(['']);
    });
  }
}
