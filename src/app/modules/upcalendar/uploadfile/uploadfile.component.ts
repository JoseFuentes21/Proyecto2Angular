import { Component, OnInit } from '@angular/core';
import { FileService } from '../service/file.service';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

@Component({
  selector: 'app-uploadfile',
  templateUrl: './uploadfile.component.html',
  styleUrls: ['./uploadfile.component.scss']
})
export class UploadfileComponent implements OnInit {

  file!: File;
  myFiles:string[]=[];
  constructor(private uploadService:FileService) { }

  ngOnInit(): void {
  }

  imageConfig: DropzoneConfigInterface = {
    maxFilesize: 10, // MB
    clickable: true,
    url : 'http://localhost:8080/file/multiple',
    addRemoveLinks: true
   };

  onUploadError(args: any): void {
    console.log("onUploadError:", args);
  }

  onUploadSuccess(args: any): void {
    console.log("onUploadSuccess:", args);
  }

  onFileSelected(event: Event){
    const target = event.target as HTMLInputElement;
    this.file = (target.files as FileList)[0];
  }

  onFileChange(event: any){
    for (let i = 0; i < event.target.files.length; i++) {
      this.myFiles.push(event.target.files[i]);
    }
  }

  subir(){
    this.uploadService.uploadFile(this.file).subscribe(resp => {
      console.log('respuesta', resp);
    });
  }

  multiple(){
    this.uploadService.multipleFile(this.myFiles).subscribe(resp => {
      console.log('resp mult', resp);
    });
  }

}
