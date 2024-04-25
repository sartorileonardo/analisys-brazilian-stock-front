import { Component, OnDestroy, OnInit } from "@angular/core";
import { SimpleAnalisysDTO } from "./simple-analisys.dto";
import { SimpleAnalisysEstimate } from "./simple-analisys-estimate.enum";
import { SimpleAnalisysService } from "./simple-analisys.service";
import { MemoryCacheService } from "../../shared/service/memory-cache.service";
import { TickerDTO } from "../../ticker.model";

@Component({
    selector: 'simple-analysis',
    templateUrl: './simple-analisys.component.html'
})
export class SimpleAnalisysComponent implements OnInit, OnDestroy {

    ticker: string = ""

    tickers: TickerDTO[] = []

    tickerIsEmpty: boolean = true

    progressBarValue: number = 0

    progressBarIsVisible: boolean = false

    stockAnalisys = new SimpleAnalisysDTO()

    constructor(private service: SimpleAnalisysService, private cacheService: MemoryCacheService) { }

    ngOnInit(): void {
        //this.getTickersMostTraded();
        this.toWakeUpBackendService();
        this.tickers = this.service.getTickers();
        console.log("Tickers: \n" + this.tickers[0].code + this.tickers[0].description);
    }

    private toWakeUpBackendService(){
        let wakeUpTicker = "VALE3";
        this.service.getAnalisys(wakeUpTicker).subscribe(
            async response => {
                console.log("Chamada para acordar o serviço realizada com sucesso!");
            },
            error => {
                console.log("Desculpe, ocorreu um erro inesperado ao acordar o serviço com ticker ["+wakeUpTicker+"]. \nTente novamente mais tarde!")
            }
        )
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

    private getTickersMostTraded() {
        let tickers = this.service.getTickersMostTraded();
        tickers.forEach(tickerMostTraded => {
                this.ticker = tickerMostTraded;
                this.getAnalisys();
                this.delay(10000);
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
                        alert("Desculpe, ocorreu um erro inesperado com o ticker ["+this.ticker+"]. \nTente novamente mais tarde ou selecione outro ticker!")
                    }
                )
            }


        }
    }

    private disableProgressBar(stockAnalisys: any): void {
        if (this.stockAnalisys !== undefined) {
            this.loadProgressBar();
            this.disableVisibleProgressBar();
        }
    }

    private loadProgressBar() {
        this.progressBarValue += 50
    }

    private parseResponseToDTO(response: any) {
        let avaliacaoGeral = SimpleAnalisysEstimate.UNDEFINITE;
        switch (response["score"]) {
            case 'EXCELLENT': avaliacaoGeral = SimpleAnalisysEstimate.EXCELLENT;
                break;
            case 'GOOD': avaliacaoGeral = SimpleAnalisysEstimate.GOOD;
                break;
            case 'FAIR': avaliacaoGeral = SimpleAnalisysEstimate.FAIR;
                break;
            case 'BAD': avaliacaoGeral = SimpleAnalisysEstimate.BAD;
                break;
            default: avaliacaoGeral = SimpleAnalisysEstimate.UNDEFINITE;
        }
        const dto = response as SimpleAnalisysDTO
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