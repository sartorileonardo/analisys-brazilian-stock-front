import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MemoryCacheService {

  cacheList: any[];

  //Verify is cache expired once week
  timerClearCache = setInterval(() => this.cleanListByExpiredDate(this.cacheList, new Date()), 1000 * 60 * 60 * 24 * 7);

  private constructor() {
    this.cacheList = [];
  }

  put(data: any): void {
    this.cacheList.push(data);
  }

  get(key: string): any {
    return this.cacheList.find(it => it.ticker == key);
  }

  exist(key: string): boolean {
    return this.cacheList.find(it => it.ticker == key) !== undefined;
  }

  clear(): void {
    this.cacheList = [];
    console.log("Memory cache was cleaned!");
  }

  private cleanListByExpiredDate(cacheList: any[], currentDate: Date): any[] {
    const threeMonthsAgo = new Date(currentDate.getFullYear(), currentDate.getMonth() - 3, currentDate.getDate());
    const filterList = cacheList.filter(it => it.data > threeMonthsAgo);

    console.log('Verified if cache is expired!');

    return filterList;
  }


}
