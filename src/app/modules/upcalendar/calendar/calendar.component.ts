import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Calendar, CalendarOptions, EventClickArg, EventInput } from '@fullcalendar/core';
import { EventImpl } from '@fullcalendar/core/internal';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  modalRef?: BsModalRef;
  eventos:any = [
    {
      title:'Aprender algo de Angular',
      date: '2023-07-17',
      color: '0000FF'
    },
    {
      title:'Aprender algo de Java',
      date: '2023-07-18',
      color: '0000FF'
    },
    {
      title:'Aprender algo de Angular',
      date: '2023-07-19',
      color: '0000FF'
    },
    {
      id: '3',
      title: 'Aprende algo de Seguridad',
      start: new Date().setDate(new Date().getDate() + 5),
      end: new Date().setDate(new Date().getDate() + 8),
      className: 'bg-warning text-white',
    }
  ];
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    themeSystem: 'bootstrap',
    events: this.eventos,
    dateClick: this.openModal.bind(this),
    eventClick: this.handleEventClick.bind(this),

  };
  @ViewChild('templateNuevo') templateNuevo!: string;
  @ViewChild('templateEditar') templateEditar!: string;
  config = {animated: true};
  nuevoEvento!: EventInput;
  formEvento!: FormGroup;

  //para editar event
  formEditEvento!:FormGroup;
  editEvent!: EventImpl;
  calendarEvents!:EventInput[];

  constructor(private modalService: BsModalService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formEvento = this.fb.group({
      title: ['',[Validators.required]],
    });
    this.formEditEvento = this.fb.group({
      editTitle: ['', [Validators.required]]
    });
    this.actualizar();
  }

  openModal(event: EventInput){
    this.nuevoEvento = event;
    this.modalRef = this.modalService.show(this.templateNuevo, this.config);
  }

  guardarEvent(){
    if(this.formEvento.valid){
      const title = this.formEvento.get('title')!.value;
      const calendar: Calendar = this.nuevoEvento["view"].calendar;
      calendar.addEvent({
        id: '4',
        title: title,
        start: this.nuevoEvento.date,
        end: this.nuevoEvento.date,
        className: 'bg-success text-white',
      });
      this.formEvento = this.fb.group({
        title: '',
      });
    }
    this.closeEventModal();
    this.modalRef?.hide();
  }

  closeEventModal(){
    this.formEvento = this.fb.group({
      title: '',
    });
  }

  handleEventClick(datos: EventClickArg){
    this.editEvent = datos.event;
    this.formEditEvento = this.fb.group({
      title: `${datos.event.title}`
    });
    this.modalRef = this.modalService.show(this.templateEditar, this.config);
  }

  guardarEdicion(){
    const editTitle = this.formEditEvento.get('title')!.value;
    const editId = this.calendarEvents.findIndex(
      (x) => {
        x.id + '' === this.editEvent.id + ''
    });
    this.editEvent.setProp('title', editTitle);

    this.calendarEvents[editId] = {
      ...this.editEvent,
      title: editTitle,
      id: this.editEvent.id,
      classNames: 'bg-success text-white'
    };

    this.formEditEvento = this.fb.group({
      editTitle: '',
      editCategory: ''
    });
    this.modalRef?.hide();
  }

  confirm(){
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#34c38f',
      cancelButtonColor: 'f46a6a',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if(result.value){
        this.deleteEventData();
        Swal.fire('Deleted!', 'Event has been deleted', 'success');
      }
    });
  }

  deleteEventData(){
    this.editEvent.remove();
    this.modalRef?.hide();
  }

  actualizar(){
    //falata metodo actuali
  }
}
