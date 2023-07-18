import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IPais } from '@shared/interfaces/pais.interface';
import { UbicacionService } from '@shared/services/ubicacion.service';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs';
import { EMAIL_VALIDATE, NAME_VALIDATE, NUMBER_VALIDATE } from 'src/app/constants/constants';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  //delarando el formulario
  formularioGeneral!:FormGroup;
  private isEmail: string = EMAIL_VALIDATE;
  private isName: string = NAME_VALIDATE;
  private isMoney: string = NUMBER_VALIDATE;
  private isDate: string = '';
  public departamentos!:IPais[];
  public municipios!:IPais[];
  public canton!:IPais[];

  constructor(private fb: FormBuilder, private toastr: ToastrService,
    private ubicacionPais: UbicacionService) { }

  ngOnInit(): void {
    this.formularioGeneral = this.iniciarFormulario();
    this.llenarComboDepartametnos();
  }

  llenarComboDepartametnos(){
    this.ubicacionPais.getDepa().pipe(map((dp) => dp.filter((depa) => depa.codigo.length === 2 )))
    .subscribe(resp => {
      this.departamentos = resp;
    });
  }

  deptoChange(id: string): void{
    this.ubicacionPais.getDepa().pipe(map(dp => dp.filter(muni => muni.codigo.startsWith(id) && muni.codigo.length === 4 )))
    .subscribe(resp => {
      this.municipios = resp;
    });
  }

  muniChange(id: string): void{
    this.ubicacionPais.getDepa().pipe(map(dp => dp.filter(cant => cant.codigo.startsWith(id) && cant.codigo.length === 6)))
    .subscribe(resp => {
      this.canton = resp;
    });
  }

  private iniciarFormulario():FormGroup {
    return this.fb.group({
      nombre:['',[Validators.required, Validators.pattern(this.isName)]],
      apellido:['',[Validators.required, Validators.pattern(this.isName)]],
      correo:['',[Validators.required, Validators.pattern(this.isEmail)]],
      genero:['',[Validators.required]],
      fecha:['',[Validators.required, Validators.pattern(this.isDate)]],
      mensaje:['',[Validators.required, Validators.minLength(5), Validators.maxLength(200)]],
      departamento:['',[Validators.required]],
      municipio:['',[Validators.required]],
      canton:['',[Validators.required]],
      direccion:this.fb.group({
        ubicacion:['',[]],
        colonia:['',[Validators.nullValidator]]
      }),
      gustos:this.fb.group({
        verde:['',[]],
        rojo:['',[]],
        negro:['',[]]
      }),
      estado:['',[]],
      salario:['',[Validators.required, Validators.pattern(this.isMoney), Validators.min(300)]],
      pasatiempos: this.fb.array([])
    });
  }

  esCampoValido(campo: string){
    const validarCampo = this.formularioGeneral.get(campo);
    return !validarCampo?.valid && validarCampo?.touched
     ? 'is-invalid' : validarCampo?.touched ? 'is-valid' : '';
  }

  guardar(){
    if(this.formularioGeneral.valid){
      Swal.fire({
        position: 'center',
        title: 'Buen Trabajo!',
        text: 'Submit disparo, Formalario es valido',
        icon: 'info'
      });
      console.log(this.formularioGeneral.valid);
    }else {
      Swal.fire({
        position: 'center',
        title: 'Faltan datos en el formulario!',
        text: 'Submit disparo, Formalario NO valido',
        icon: 'warning'
      });

      return Object.values(this.formularioGeneral.controls)
      .forEach((control) => control.markAsTouched());
    }
  }

  noRequiereValor(campo: string): string{
    return this.formularioGeneral.get(campo)?.value ? 'is-valid': '';
  }

  get pasatiempos(){
    return this.formularioGeneral.get('pasatiempos') as FormArray;
  }
  agregarPasatiempo(){
    this.pasatiempos.push(this.fb.control('', Validators.required));
  }
  borrarPasatiempo(i: number){
    this.pasatiempos.removeAt(i);
  }

}
