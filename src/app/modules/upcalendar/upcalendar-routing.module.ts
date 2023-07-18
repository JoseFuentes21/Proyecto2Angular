import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { UploadfileComponent } from './uploadfile/uploadfile.component';

const routes: Routes = [
  {path:'calendar', component:CalendarComponent},
  {path:'upload',component:UploadfileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpcalendarRoutingModule { }
