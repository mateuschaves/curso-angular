import { Injectable } from '@angular/core';

@Injectable()
export class ServiceService {

  constructor() { }


  getData()
  {
    return [
      {"id": 1, "name": "Mateus", "age": 19},
      {"id": 2, "name": "Sei não", "age": 29},
      {"id": 3, "name": "Vrau", "age": 14},
      {"id": 4, "name": "Eita", "age": 59},
      {"id": 5, "name": "Q  ? ", "age": 89},
    ];
  }

}
