import { Component } from '@angular/core';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html'
})
export class LugaresComponent {
  title = 'Platzisquare';
  lugares:any = [
    {id: 1, plan: 'pagado', cercania: 1, distancia: 1, active: false, nombre: 'Floreria'},
    {id: 2, plan: 'gratuito', cercania: 1, distancia: 1.8, active: true, nombre: 'Doneria'},
    {id: 3, plan: 'gratuito', cercania: 2, distancia: 10, active: true, nombre: 'Veterinaria'},
    {id: 4, plan: 'pagado', cercania: 3, distancia: 35, active: false, nombre: 'Restaurante'},
    {id: 5, plan: 'gratuito', cercania: 3, distancia: 120, active: true, nombre: 'Mercado'}
  ];
  lat:number = -0.261479;
  lng:number = -78.5593177;
  constructor(){

  }
}
