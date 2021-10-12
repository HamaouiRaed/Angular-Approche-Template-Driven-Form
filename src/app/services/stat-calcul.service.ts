import { Injectable } from '@angular/core';
import { getHeapStatistics } from 'v8';

@Injectable({
  providedIn: 'root'
})
export class StatCalculService {

  constructor() { }
  getStat(list: any[], creteria: string, value: any): number {
    let n = 0;
    for (let i in list) {
      if (list[i][creteria] === value) {
        n++;
      }
    }
    return n;
  }
}





