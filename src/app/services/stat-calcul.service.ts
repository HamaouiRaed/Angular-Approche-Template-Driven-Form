import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class StatCalculService {

  constructor() { }

  getStat(list: any[], criteria: string, value: any): number {
    let n = 0;
    for (let i in list) {
      if (list[i] [criteria] === value) {
        n++;
      }
    }
    return n;
  }
}





