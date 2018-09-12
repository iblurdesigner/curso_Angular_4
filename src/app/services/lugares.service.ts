import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable()
export class LugaresService{
  API_ENDPOINT = 'https://novasquare-a0841.firebaseio.com';
  lugares: any = [
    {id: 1, plan: 'pagado', cercania: 1, distancia: 1, active: false, nombre: 'Floreria'},
    {id: 2, plan: 'gratuito', cercania: 1, distancia: 1.8, active: true, nombre: 'Doneria'},
    {id: 3, plan: 'gratuito', cercania: 2, distancia: 10, active: true, nombre: 'Veterinaria'},
    {id: 4, plan: 'pagado', cercania: 3, distancia: 35, active: false, nombre: 'Restaurante'},
    {id: 5, plan: 'gratuito', cercania: 3, distancia: 120, active: true, nombre: 'Mercado'}
  ];

  constructor(private afDB: AngularFireDatabase, private http: HttpClient){}
  public getLugares() {
    return this.afDB.list('lugares/');
  }
  public buscarLugar(id) {
    return this.lugares.filter((lugar) => {return lugar.id == id})[0] || null;
  }
  public guardarLugar(lugar) {
    // this.afDB.database.ref('lugares/' + lugar.id).set(lugar);
    try {
      const headers = new HttpHeaders({"Content-Type": "application/json"});
      return this.http.post(this.API_ENDPOINT + '/lugares.json', lugar, { headers: headers }).subscribe();
    } catch (exception) {
        alert('Error: ' + exception);
    }
  }
  public editarLugar(lugar) {
    this.afDB.database.ref(`lugares/${lugar.id}`).set(lugar);
  }
  public obtenerGeoData(direccion) {
    // http://maps.google.com/maps/api/geocode/json?address=9-55+calle+72,+Bogota,Colombia
    return this.http.get('http://maps.google.com/maps/api/geocode/json?address=' + direccion);
  }
  public getLugar(id) {
    return this.afDB.object('lugares/' + id);
  }
}
