import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import {ResaltarDirective} from './directives/resaltar.directive';
import {ContarClicksDirective} from './directives/contar-clicks.directive';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule, Routes} from '@angular/router';
import {DetalleComponent} from './detalle/detalle.component';
import {LugaresComponent} from './lugares/lugares.component';
import {ContactoComponent} from './contacto/contacto.component';
import {LugaresService} from './services/lugares.service';
import {environment} from '../environments/environment';
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {CrearComponent} from './crear/crear.component';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';

const appRoutes: Routes = [
  {path: '', component: LugaresComponent},
  {path: 'lugares', component: LugaresComponent},
  {path: 'detalle/:id', component: DetalleComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'crear', component: CrearComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    ContarClicksDirective,
    DetalleComponent,
    LugaresComponent,
    ContactoComponent,
    CrearComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAKK4TB9Cwn_XbTN3ZEP3_RyqoNRpVjdq8'
    }),
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [LugaresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
