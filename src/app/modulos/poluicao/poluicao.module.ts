import { AppModule } from './../../app.module';
import { BuscaCidadeComponent } from 'src/app/busca-cidade/busca-cidade.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoluicaoRoutingModule } from './poluicao-routing.module';
import { PoluicaoHomeComponent } from './poluicao-home/poluicao-home.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    PoluicaoHomeComponent
  ],
  imports: [
    CommonModule,
    PoluicaoRoutingModule,
    MaterialModule
  ]
})
export class PoluicaoModule { }
