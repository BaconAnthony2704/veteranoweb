import { Component, OnInit } from '@angular/core';
import { BeneficiosModel } from 'src/app/models/beneficios.model';
import { BeneficiosService } from './beneficios.service';
import {DynamicDialogRef} from 'primeng/api';
import {DynamicDialogConfig} from 'primeng/api';
import { BeneficiosVeteranoModel } from 'src/app/models/veteranoBeneficio.model';

@Component({
  selector: 'app-beneficios',
  templateUrl: './beneficios.component.html',
  styleUrls: ['./beneficios.component.css']
})
export class BeneficiosComponent implements OnInit {
  listaBeneficios:BeneficiosModel[]=[];
  selectedBeneficios:BeneficiosModel;
  veteBeneficio:BeneficiosVeteranoModel=new BeneficiosVeteranoModel();
  constructor(
    public beneficioService:BeneficiosService,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) { }

  idVeterano:number=-1;
  idBeneficio:number=-1;
  ngOnInit(): void {
    this.obtenerBeneficios();
  }

  obtenerBeneficios(){
    this.beneficioService.obtenerVeterano()
    .subscribe(
      (data)=>{
        this.listaBeneficios=data;

      }
    )
  }

  guardarBeneficioVeterano(){
    this.idVeterano=this.config.data.idVeterano;
    this.idBeneficio=this.selectedBeneficios.idBeneficios;

    this.veteBeneficio.idBeneficio=this.idBeneficio;
    this.veteBeneficio.idVeterano=this.idVeterano;
    this.beneficioService.guardarBeneficio(this.veteBeneficio)
    .subscribe(
      (data)=>{
        console.log(data);

      }
    )


    //console.log(this.config.data);

  }

}
