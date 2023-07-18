import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpcalendarRoutingModule } from './upcalendar-routing.module';
import { CalendarComponent } from './calendar/calendar.component';
import { UploadfileComponent } from './uploadfile/uploadfile.component';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { FullCalendarModule } from '@fullcalendar/angular';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    CalendarComponent,
    UploadfileComponent
  ],
  imports: [
    CommonModule,
    UpcalendarRoutingModule,
    HttpClientModule,
    DropzoneModule,
    FullCalendarModule,
    ModalModule.forRoot(),
    ReactiveFormsModule
  ]
})
export class UpcalendarModule { }
