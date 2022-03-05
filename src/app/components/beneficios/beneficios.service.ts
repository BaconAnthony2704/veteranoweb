import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { BeneficiosVeteranoModel } from 'src/app/models/veteranoBeneficio.model';


@Injectable({
  providedIn: 'root'
})
export class BeneficiosService {

  constructor(
    public http:HttpClient
  ) { }

  obtenerVeterano(){
    return this.http.get<any>("https://localhost:44369/api/Beneficios")
    .pipe(
      map((response) => {
        return response;
      }),
      catchError((err, caught) => {
        console.error(err);
        throw err;
      }
      )
    )

  }

  guardarBeneficio(veteranoBeneficio:BeneficiosVeteranoModel){
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(veteranoBeneficio)
    return this.http.post<any>("https://localhost:44369/api/Veterano/CrearBeneficioVeterano",veteranoBeneficio,{headers:headers})
    .pipe(
      map((response) => {
        return response;
      }),

      catchError((err, caught) => {
        console.error(err);
        throw err;
      }
      )
    )
  }
}
