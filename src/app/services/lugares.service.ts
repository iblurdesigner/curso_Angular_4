import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {GeoInterface} from '../interface/response-geoapi.interface';
import {map} from 'rxjs/operators';
import { RequestOptions } from '@angular/http';
import {Observable} from 'rxjs';

@Injectable()
export class LugaresService {
  API_ENDPOINT = 'https://novasquare-a0841.firebaseio.com';
  lugares: any = [];

  constructor(private afDB: AngularFireDatabase, private http: HttpClient) { }
  public getLugares() {
    // return this.afDB.list('lugares/');
    return this.http.get(this.API_ENDPOINT + '/.json')
      .pipe(map((resultado) => {
          const data = resultado.json().lugares;
          return data;
        })
      );
  }
  public buscarLugar(id) {
    return this.lugares.filter((lugar) => {return lugar.id == id})[0] || null;
  }
  public guardarLugar(lugar) {
    // this.afDB.database.ref('lugares/' + lugar.id).set(lugar);
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(this.API_ENDPOINT + '/lugares.json ', lugar, {headers : HttpHeaders}).subscribe();
  }

  public editarLugar(lugar) {
    this.afDB.database.ref('lugares/' + lugar.id).set(lugar);
  }

  public obtenerGeoData(direccion) {
    return this.http.get('https://maps.google.com/maps/api/geocode/json?address=' + direccion);
  }

  public getLugar(id) {
    return this.afDB.object('lugares/' + id);
  }
}
