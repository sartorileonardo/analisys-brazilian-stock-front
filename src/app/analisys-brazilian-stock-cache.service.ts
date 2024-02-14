import { Injectable } from '@angular/core';
import { AnalisysBrazilianStockDTO } from './analisys-brazilian-stock.dto';


@Injectable({
  providedIn: 'root'
})
export class CacheService {

  cacheList: Array<AnalisysBrazilianStockDTO>;

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
    //this.cacheList = [];
    this.cacheList = this.cleanListByExpiredDate(this.cacheList, new Date());
  }

  private cleanListByExpiredDate(cacheList: any[], currentDate: Date): any[] {
    const threeMonthsAgo = new Date(currentDate.getFullYear(), currentDate.getMonth() - 3, currentDate.getDate());
    const filterList = cacheList.filter(it => it.data > threeMonthsAgo);
  
    return filterList;
  }


}
