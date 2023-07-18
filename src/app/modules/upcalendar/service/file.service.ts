import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private url:string = 'http://localhost:8080/file';
  myFiles: string[] = [];

  constructor(private http:HttpClient) { }

  uploadFile(file: File){
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(`${this.url}/upload`, formData);
  }

  multipleFile(myFiles: string[]){
    const formData = new FormData();
    for(var i=0; i<myFiles.length; i++){
      formData.append('file', myFiles[i]);
    }
    return this.http.post(`${this.url}/multiple`, formData);
  }
}
