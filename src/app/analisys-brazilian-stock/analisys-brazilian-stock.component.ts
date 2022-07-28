import { Component, OnInit } from "@angular/core";
import { AnalisysBrazilianStockDTO } from "../analisys-brazilian-stock.dto";
import { AvaliacaoGeral } from "../analisys-brazilian-stock.enum";
import { AnalisysBrazilianStockService } from "../analisys-brazilian-stock.service";
import { TickerDTO } from "../ticker.model";


@Component({
    selector: 'analisys-brazilian-stock',
    templateUrl: './analisys-brazilian-stock.component.html'
})
export class AnalisysBrazilianStockComponent implements OnInit {

    ticker: string = ""

    tickers: TickerDTO[] = []

    tickerIsEmpty: boolean = true

    progressBarValue: number = 0

    progressBarIsVisible: boolean = false

    stockAnalisys = new AnalisysBrazilianStockDTO()

    constructor(private service: AnalisysBrazilianStockService) { }

    ngOnInit(): void {
        //this.getAnalisys()
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

    private async getAnalisys() {
        if (this.tickerIsValid()) {
            this.enableVisibleProgressBar()
            this.loadProgressBar()
            this.service.getAnalisys(this.ticker).subscribe(
                async res => {
                    this.stockAnalisys = this.parseResponseToDTO(res)
                    this.tickerIsEmpty = res == undefined

                    if (res !== undefined) {
                        this.loadProgressBar()
                        this.disableVisibleProgressBar()
                    }
                },
                error => {
                    alert("Desculpe, ocorreu um erro inesperado. \nTente novamente mais tarde ou selecione outro ticker!")
                }
            )
            console.log(this.stockAnalisys)
        }
    }

    private loadProgressBar() {
        this.progressBarValue += 50
    }

    private parseResponseToDTO(res: any) {
        let avaliacaoGeral = AvaliacaoGeral.INDEFINIDO;
        switch (res["avaliacaoGeral"]) {
            case 'OTIMO': avaliacaoGeral = AvaliacaoGeral.OTIMO;
                break;
            case 'BOM': avaliacaoGeral = AvaliacaoGeral.BOM;
                break;
            case 'REGULAR': avaliacaoGeral = AvaliacaoGeral.REGULAR;
                break;
            case 'RUIM': avaliacaoGeral = AvaliacaoGeral.RUIM;
                break;
            default: avaliacaoGeral = AvaliacaoGeral.INDEFINIDO;
        }
        const dto = res as AnalisysBrazilianStockDTO
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


}