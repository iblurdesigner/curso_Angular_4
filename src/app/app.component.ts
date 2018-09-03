import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Platzisquare';
  lugares:any = [
    {plan: 'pagado', cercania: 1, distancia: 1, active: false, nombre: 'Floreria'},
    {plan: 'gratuito', cercania: 1, distancia: 1.8, active: true, nombre: 'Doneria'},
    {plan: 'gratuito', cercania: 2, distancia: 10, active: true, nombre: 'Veterinaria'},
    {plan: 'pagado', cercania: 3, distancia: 35, active: false, nombre: 'Restaurante'},
    {plan: 'gratuito', cercania: 3, distancia: 120, active: true, nombre: 'Mercado'}
  ];
  lat:number = -0.261479;
  lng:number = -78.5593177;
  constructor(){

  }
}
