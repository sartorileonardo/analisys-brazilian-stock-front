import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AnalisysBrazilianStockDTO } from './analisys-brazilian-stock.dto';

@Injectable({
  providedIn: 'root'
})
export class AnalisysBrazilianStockService {

  //private baseUrl = "https://analisys-brazilian-stock.herokuapp.com/stock/analisys";
  private baseUrl = "http://localhost:8888/stock/analisys";

  constructor(private http: HttpClient) { }

  getAnalisys(ticker: string): Observable<any> {
    return this.http.get(`${this.baseUrl}` + `/${ticker}`);
  }

}