import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VeteranoService {

  constructor(
    private http:HttpClient
  ) {

  }

  obtenerVeterano():Observable<any>{
    return this.http.get<any>("https://localhost:44369/api/Veterano")
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
