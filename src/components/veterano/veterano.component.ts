import { Component, OnInit } from '@angular/core';
import { VeteranoModel } from 'src/app/models/veterano.models';
import { VeteranoService } from './veterano.service';
import {DialogService} from 'primeng/api';
import { BeneficiosComponent } from 'src/app/components/beneficios/beneficios.component';

@Component({
  selector: 'app-veterano',
  templateUrl: './veterano.component.html',
  styleUrls: ['./veterano.component.css'],
  providers:[DialogService]
})
export class VeteranoComponent implements OnInit {


  constructor(
    public _veteranoService:VeteranoService,
    public dialogService: DialogService

  ) { }

  listaVeterano:VeteranoModel[]=[];
  selectedVeterano:VeteranoModel;

  ngOnInit(): void {
    this.obtenerListadoVeterano();
  }

  obtenerListadoVeterano(){
    this._veteranoService.obtenerVeterano()
    .subscribe(
      (data)=>{
        this.listaVeterano=data;
        console.log(data);

      }
    )
  }

  asociarBeneficios(evt){
    const ref=this.dialogService.open(BeneficiosComponent,{
      data:{
        idVeterano:evt
      },
      header:'Asociar beneficio',
      width:'70%'
    })
  }

  crearNuevo(){
    this.listaVeterano.push(
      new VeteranoModel()
    )

  }

  guardarTodo(){

  }

}
