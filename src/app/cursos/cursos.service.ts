import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

constructor(){
  console.log('Instanciou o metodo');
}
  getCursos() {
    return ['Angular 2', 'Java', 'Phonegap', 'React'];
  }
}
