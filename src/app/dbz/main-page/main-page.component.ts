import { Component } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent  {

  personajes: Personaje[] = [];
  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  agregarNuevoPersonaje( personaje: Personaje ) {
    debugger;
    this.personajes.push( personaje );
  }

  constructor( private dbzService: DbzService){

  }

}
