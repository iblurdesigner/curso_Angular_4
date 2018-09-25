import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LugaresService} from '../services/lugares.service';
import { GeoInterface } from '../interface/response-geoapi.interface';
import { Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html'
})
export class CrearComponent {
  lugar: any = {};
  id:any = null;
  constructor(private lugaresService: LugaresService, private route: ActivatedRoute, private http: HttpClient) {
    this.id = this.route.snapshot.params['id'];
    if (this.id != 'new') {
      this.lugaresService.getLugar(this.id)
        .valueChanges().subscribe( (lugar) => {
          this.lugar = lugar;
        });
    }
  }

  // test() {
  //   fetch('http://maps.google.com/maps/api/geocode/json?address=9-55+calle+72,+Bogota,Colombia')
  //     .then(
  //       response => { return response.json(); }
  //     )
  //     .then(datos => {
  //       console.log(datos.results[0].geometry.location);
  //     });
  // }

  // ngOnInit() {
  //   let obs = this.http.get('http://maps.google.com/maps/api/geocode/json?address=9-55+calle+72,+Bogota,Colombia');
  //   obs.subscribe((response) => {
  //     console.log(response);
  //   });
  // }

  guardarLugar() {
    const direccion = this.lugar.calle + ',' + this.lugar.ciudad + ',' + this.lugar.pais;

    // la constante direccion se lo pasamos a lugares Services ==>
    this.lugaresService.obtenerGeoData(direccion)
      .subscribe((result: GeoInterface) => {
        this.lugar.lat = result.results[0].geometry.location.lat;
        this.lugar.lng = result.results[0].geometry.location.lng;

        if (this.id != 'new') {
          this.lugaresService.editarLugar(this.lugar);
          alert('Negocio Editado con éxito!');
        } else {
          this.lugar.id = Date.now();
          this.lugaresService.guardarLugar(this.lugar);
          alert('Negocio creado con éxito!');
        }
        this.lugar = {};
      });
  }

}
