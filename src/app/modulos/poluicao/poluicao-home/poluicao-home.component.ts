import { PolutionData, TempoService } from './../../../tempo/tempo.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home-poluicao',
  templateUrl: './poluicao-home.component.html',
  styleUrls: ['./poluicao-home.component.css']
})
export class PoluicaoHomeComponent {

  displayedColumns: string[] = ['demo-name', 'demo-weight', 'demo-symbol'];
  polutionData?: PolutionData
  cidadePais: string

  tempoService: TempoService

  constructor(tempoService: TempoService) {
    this.cidadePais = "Correia Pinto, Br";
    this.tempoService = tempoService;
    this.buscaPoluicao();
    //tempoService.buscarTempoAtual("Penha", "Brasil").subscribe(data =>
      //.buscarPoluicao(data.latitude, data.longitude).subscribe(data => this.polutionData = data)
    //);
    //tempoService.buscarPoluicao(-27.5904651508871418, -50.36225636499196).subscribe(data => this.polutionData = data);
  }

  public buscaPoluicao(): void{
    this.tempoService.buscarTempoAtual(this.cidadePais.split(",")[0].trim(), this.cidadePais.split(",")[1].trim()).subscribe(data =>
      this.tempoService.buscarPoluicao(data.latitude, data.longitude).subscribe(data => this.polutionData = data)
    );
  }

}

