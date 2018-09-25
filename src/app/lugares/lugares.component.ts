import { Component } from '@angular/core';
import {LugaresService} from '../services/lugares.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html'
})
export class LugaresComponent {
  title = 'NovaSquare';

  lat:number = -0.261479;
  lng:number = -78.5593177;

  lugares = null;
  constructor(private lugaresService: LugaresService, private routes: ActivatedRoute) {
    lugaresService.getLugares()
      .subscribe(lugares => {
        this.lugares = lugares;
        var me = this;
        this.lugares = Object.values(lugares);
    }, error => {
        console.log(error);
        alert('Tenemos algo de dificultades, disculpe las molestias. Error: '+error.statusText);
      });
    // this.id = this.routes.snapshot.params['id'];
    // console.log(this.id);
    // if(this.id != 'new') {
    //   lugaresService.getLugar(this.id).valueChanges().subscribe((lugar) => {
    //     lugaresService.getLugar().valueChanges().subscribe((lugar) => {
    //       this.lugar = lugar;
    //       let me = this;
    //       this.lugar = Object.keys(me.lugar).map((key) => me.lugar[key]);
    //       $.each(this.lugar, function (index, value) {
    //         if(value.id == me.id) {
    //           me.lugar = value;
    //         }
    //       });
    //       console.log(me.lugar);
    //     })
    //   })
    // }
  }
}
