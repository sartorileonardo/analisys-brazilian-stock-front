import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of, throwError } from 'rxjs';
import { TickerDTO } from '../../ticker.model';

@Injectable({
  providedIn: 'root'
})
export class SimpleAnalisysService {

  isProd: boolean = true;
  hasBackend: boolean = false;

  private localDataPath = 'assets/stock-analisys-br.stocks.json'; // Path to local JSON file

  private baseUrlProd = "http://3.89.4.103:8888/stock/analisys";
  private baseUrlProdOld = "https://analisys-brazilian-stock-36da1af9e42b.herokuapp.com/stock/analisys";
  private baseUrlDev = "http://localhost:8888/stock/analisys";

  constructor(private http: HttpClient) { }

  headerDict = {
    'Content-Type': 'application/json',
    'Accept': '*/*',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Origin': 'https://analisys-brazilian-stock-front.vercel.app/',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Headers': '*'
  }

  requestOptions = {
    headers: new HttpHeaders(this.headerDict),
  };

  getAnalisys(ticker: string): Observable<any> {
    let baseUrl = this.isProd ? this.baseUrlProd : this.baseUrlDev;
  
    return this.http.get(`${baseUrl}/${ticker}`, this.requestOptions).pipe(
      catchError((error) => {
        console.error('Error fetching analysis:', error);
        return throwError(() => new Error('Failed to fetch analysis data. Please try again later.'));
      })
    );
  }

  getTickers(): TickerDTO[] {
    return this.allTickers
      .filter(it => it[0].slice(-1).includes("3") || it[0].slice(-1).includes("4"))
      .map(it => new TickerDTO(it[0], it[1].replace("- ", "").toUpperCase()))
      .sort(function (a, b) {
        let first = a.description.toLowerCase();
        let second = b.description.toLowerCase();
        return first < second ? -1 : first > second ? 1 : 0;
      })
  }

  getTickersMostTraded() {
    return this.allTickers.map(ticker => ticker[0]);
  }

  // Function to replace tickers ending in '4' or '11' with '3'
  replaceTickers(tickers: [string, string][]): [string, string][] {
    return tickers.map(([ticker, name]) => {
      if (ticker.endsWith('4') || ticker.endsWith('4F') || ticker.endsWith('11')) {
        ticker = ticker.substring(0, ticker.length - 1) + '3';
      }
      return [ticker, name];
    });
  }


  //Top 100 companies most traded
  allTickers: [string, string][] = [
    ['ABEV3', ' - AMBEV S/A'],
    ['AERI3', ' - AERIS'],
    ['AZUL4', ' - AZUL'],
    ['B3SA3', ' - B3'],
    ['BBAS3', ' - BANCO DO BRASIL'],
    ['BBDC3', ' - BANCO BRADESCO'],
    ['BBSE3', ' - BB SEGURIDADE'],
    ['BEEF3', ' - MINERVA'],
    ['BPAC3', ' - BTGP BANCO'],
    ['BRAP3', ' - BRADESPAR'],
    ['BRDT3', ' - PETROBRAS DISTRIBUIDORA'],
    ['BRFS3', ' - BRF'],
    ['BRKM3', ' - BRASKEM'],
    ['BRML3', ' - BR MALLS'],
    //['BTOW3', ' - B2W'],
    ['CARD3', ' - CSU CARDSYSTEM'],
    ['CCRO3', ' - CCR'],
    ['CESP3', ' - CESP'],
    ['CGRA3', ' - GRAZZIOTIN'],
    //['CIEL3', ' - CIELO'],
    ['CMIG3', ' - CEMIG'],
    ['COGN3', ' - COGNA'],
    ['CPFE3', ' - CPFL ENERGIA'],
    ['CPLE3', ' - COPEL'],
    ['CRFB3', ' - CARREFOUR BRASIL'],
    ['CSAN3', ' - COSAN'],
    ['CSMG3', ' - COPASA'],
    ['CSNA3', ' - SID NACIONAL'],
    ['CVCB3', ' - CVC BRASIL'],
    ['CYRE3', ' - CYRELA'],
    ['DASA3', ' - DASA'],
    ['DIRR3', ' - DIRECIONAL'],
    ['DTEX3', ' - DURATEX'],
    ['ECOR3', ' - ECORODOVIAS'],
    ['EGIE3', ' - ENGIE BRASIL'],
    ['ELET3', ' - ELETROBRAS'],
    ['EMBR3', ' - EMBRAER'],
    ['ENEV3', ' - ENEVA'],
    ['ENGI3', ' - ENERGISA'],
    ['EQTL3', ' - EQUATORIAL'],
    ['EZTC3', ' - EZTEC'],
    ['FLRY3', ' - FLEURY'],
    ['GGBR3', ' - GERDAU'],
    ['GNDI3', ' - INTERMÉDICA'],
    ['GOAU3', ' - GERDAU MET'],
    ['HAPV3', ' - HAPVIDA'],
    ['HGTX3', ' - CIA HERING'],
    ['HYPE3', ' - HYPERA'],
    ['IGTA3', ' - IGUATEMI'],
    ['IRBR3', ' - IRB BRASIL'],
    ['ITSA3', ' - ITAUSA'],
    ['ITUB3', ' - ITAU UNIBANCO'],
    ['JBSS3', ' - JBS'],
    ['KLBN3', ' - KLABIN S/A'],
    ['LAME3', ' - LOJAS AMERIC'],
    ['LCAM3', ' - LOCAMERICA'],
    ['LEVE3', ' - METAL LEVE'],
    ['LIGT3', ' - LIGHT S/A'],
    //['LINX3', ' - LINX'],
    ['LREN3', ' - LOJAS RENNER'],
    ['MGLU3', ' - MAGAZ LUIZA'],
    ['MRFG3', ' - MARFRIG'],
    ['MRVE3', ' - MRV'],
    ['MULT3', ' - MULTIPLAN'],
    ['NATU3', ' - NATURA'],
    ['ODPV3', ' - ODONTOPREV'],
    ['PCAR3', ' - P.ACUCAR-CBD'],
    ['PETR3', ' - PETROBRAS'],
    ['PSSA3', ' - PORTO SEGURO'],
    ['QUAL3', ' - QUALICORP'],
    ['RADL3', ' - RAIADROGASIL'],
    ['RAIL3', ' - RUMO'],
    ['RENT3', ' - LOCALIZA'],
    ['SBSP3', ' - SABESP'],
    ['SULA3', ' - SUL AMERICA'],
    ['SUZB3', ' - SUZANO'],
    ['TAEE3', ' - TAESA'],
    ['TIMS3', ' - TIM PARTICIPACOES'],
    ['TOTS3', ' - TOTVS'],
    ['UGPA3', ' - ULTRAPAR'],
    ['USIM3', ' - USIMINAS'],
    ['VALE3', ' - VALE'],
    ['VIVT3', ' - TELEF BRASIL'],
    ['BHIA3', ' - GRUPO CASAS BAHIA'],
    ['WEGE3', ' - WEG'],
  ];

}
