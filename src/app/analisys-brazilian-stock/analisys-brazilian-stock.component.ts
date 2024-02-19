import { Component, OnDestroy, OnInit } from "@angular/core";
import { AnalisysBrazilianStockDTO } from "./analisys-brazilian-stock.dto";
import { AvaliacaoGeral } from "./analisys-brazilian-stock.enum";
import { AnalisysBrazilianStockService } from "../shared/service/analisys-brazilian-stock.service";
import { CacheService } from "../shared/service/analisys-brazilian-stock-cache.service";
import { TickerDTO } from "../ticker.model";

@Component({
    selector: 'analisys-brazilian-stock',
    templateUrl: './analisys-brazilian-stock.component.html'
})
export class AnalisysBrazilianStockComponent implements OnInit, OnDestroy {

    ticker: string = ""

    tickers: TickerDTO[] = []

    tickerIsEmpty: boolean = true

    progressBarValue: number = 0

    progressBarIsVisible: boolean = false

    stockAnalisys = new AnalisysBrazilianStockDTO()

    constructor(private service: AnalisysBrazilianStockService, private cacheService: CacheService) { }

    ngOnInit(): void {
        //this.getTickersMostTraded();
        this.tickers = this.service.getTickers()
        console.log("Tickers: \n" + this.tickers[0].code + this.tickers[0].description)
    }

    tickerChanged(event: string) {
        this.ticker = event
        console.log(this.ticker)
    }

    private tickerIsValid(): boolean {
        if (this.ticker == undefined || this.ticker.trim() == "") {
            alert("Selecione uma empresa para análise!");
            return false;
        }
        return true;
    }

    private getTickersMostTraded(){
        let tickers = this.service.getTickersMostTraded();
        tickers.forEach(tickerMostTraded => {
            this.ticker = tickerMostTraded;
            this.getAnalisys();
            this.delay(10);
        })
        this.clearTicker();
    }

    private async getAnalisys() {
        if (this.tickerIsValid()) {
            this.enableVisibleProgressBar()
            this.loadProgressBar()

            if (this.cacheService.exist(this.ticker)) {
                this.stockAnalisys = this.cacheService.get(this.ticker);
                console.log("Recovered by cache: " + this.ticker);

                this.disableProgressBar(this.stockAnalisys);

            } else {
                this.service.getAnalisys(this.ticker).subscribe(
                    async response => {
                        this.stockAnalisys = this.parseResponseToDTO(response)
                        console.log("Recovered by API: " + this.ticker);

                        this.tickerIsEmpty = response == undefined

                        this.cacheService.put(this.stockAnalisys);
                        console.log("Added into cache: " + this.ticker);

                        this.disableProgressBar(response);
                    },
                    error => {
                        alert("Desculpe, ocorreu um erro inesperado. \nTente novamente mais tarde ou selecione outro ticker!")
                    }
                )
            }


        }
    }

    private disableProgressBar(stockAnalisys: any): void{
        if (this.stockAnalisys !== undefined) {
            this.loadProgressBar();
            this.disableVisibleProgressBar();
        }
    }

    private loadProgressBar() {
        this.progressBarValue += 50
    }

    private parseResponseToDTO(response: any) {
        let avaliacaoGeral = AvaliacaoGeral.UNDEFINITE;
        switch (response["score"]) {
            case 'EXCELLENT': avaliacaoGeral = AvaliacaoGeral.EXCELLENT;
                break;
            case 'GOOD': avaliacaoGeral = AvaliacaoGeral.GOOD;
                break;
            case 'FAIR': avaliacaoGeral = AvaliacaoGeral.FAIR;
                break;
            case 'BAD': avaliacaoGeral = AvaliacaoGeral.BAD;
                break;
            default: avaliacaoGeral = AvaliacaoGeral.UNDEFINITE;
        }
        const dto = response as AnalisysBrazilianStockDTO
        dto.avaliacaoGeral = avaliacaoGeral
        return dto
    }

    search() {
        this.getAnalisys()
        this.clearTicker()
        this.clearProgressBar()
        console.log("Search")
    }

    private clearTicker() {
        this.ticker = ""
    }

    private enableVisibleProgressBar() {
        this.progressBarIsVisible = true
    }

    private async disableVisibleProgressBar() {
        await this.delay(2000)
        this.progressBarIsVisible = false
    }

    private async clearProgressBar() {
        await this.delay(2000);
        this.progressBarValue = 0
    }

    private delay(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    ngOnDestroy() {
        this.cacheService.clear();
    }


}