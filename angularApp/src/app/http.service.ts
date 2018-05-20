import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { 
    this.getNotes();
  }

  getNotes(){
    return this._http.get('/api/notes');
  }

  addNotes(noteObj){
    return this._http.post('/api/notes', noteObj);
  }

}
