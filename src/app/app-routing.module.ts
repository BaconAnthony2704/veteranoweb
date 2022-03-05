import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VeteranoComponent } from 'src/components/veterano/veterano.component';
import { BeneficiosComponent } from './components/beneficios/beneficios.component';



const routes: Routes = [
  { path: 'ListarVeterano', component: VeteranoComponent },
  { path: 'ListarBeneficios', component: BeneficiosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
