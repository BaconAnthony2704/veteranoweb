import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableModule } from 'primeng/table';
import { VeteranoComponent } from 'src/components/veterano/veterano.component';
import { BeneficiosComponent } from './components/beneficios/beneficios.component';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,

    VeteranoComponent,
    BeneficiosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TableModule,
    DynamicDialogModule,
    ButtonModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  entryComponents:[
    BeneficiosComponent
  ]
})
export class AppModule { }
