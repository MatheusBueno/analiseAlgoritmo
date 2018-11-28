import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  createArray(size: number): number[] {
    const vetor = [];
    for (let index = 0; index < size; index++) {
      vetor.push(Math.floor(Math.random() * 100000));
    }
    return vetor;
  }

}
