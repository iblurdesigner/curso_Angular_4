import { Component } from '@angular/core';
import {LugaresService} from '../services/lugares.service';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html'
})
export class LugaresComponent {
  title = 'Novasquare';

  lat:number = -0.261479;
  lng:number = -78.5593177;

  lugares = null;
  constructor(private lugaresService: LugaresService) {
    lugaresService.getLugares()
      .valueChanges().subscribe(lugares => {
        this.lugares = lugares;
      });
  }
}
