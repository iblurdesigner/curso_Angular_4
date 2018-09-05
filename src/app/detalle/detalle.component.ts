import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html'
})
export class DetalleComponent {
  lugares: any = [
    {id: 1, plan: 'pagado', cercania: 1, distancia: 1, active: false, nombre: 'Floreria', description: 'Descripcion de este negocio. Más adelante tendremos mas informacion'},
    {id: 2, plan: 'gratuito', cercania: 1, distancia: 1.8, active: true, nombre: 'Doneria', description: 'Descripcion de este negocio. Más adelante tendremos mas informacion'},
    {id: 3, plan: 'gratuito', cercania: 2, distancia: 10, active: true, nombre: 'Veterinaria', description: 'Descripcion de este negocio. Más adelante tendremos mas informacion'},
    {id: 4, plan: 'pagado', cercania: 3, distancia: 35, active: false, nombre: 'Restaurante', description: 'Descripcion de este negocio. Más adelante tendremos mas informacion'},
    {id: 5, plan: 'gratuito', cercania: 3, distancia: 120, active: true, nombre: 'Mercado', description: 'Descripcion de este negocio. Más adelante tendremos mas informacion'}
  ];
  id = null;
  lugar: any = {};
  constructor(private route: ActivatedRoute) {
    console.log(this.route.snapshot.params['id']);
    console.log(this.route.snapshot.queryParams['action2']);
    console.log(this.route.snapshot.queryParams['referer']);
    this.id = this.route.snapshot.params['id'];
    this.lugar = (this.buscarLugar());
  }
  buscarLugar () {
    return this.lugares.filter((lugar) => {return lugar.id == this.id})[0] || null;
  }
}
