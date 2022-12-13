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

  constructor(tempoService: TempoService) {
    tempoService.buscarPoluicao(-27.590465150887418, -50.36225636499196).subscribe(data => this.polutionData = data);
  }

}
