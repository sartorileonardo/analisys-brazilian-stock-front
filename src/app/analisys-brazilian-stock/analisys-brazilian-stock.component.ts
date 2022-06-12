import { Component, OnInit } from "@angular/core";
import { AnalisysBrazilianStockDTO } from "../analisys-brazilian-stock.dto";
import { AnalisysBrazilianStockService } from "../analisys-brazilian-stock.service";


@Component({
    selector: 'analisys-brazilian-stock',
    templateUrl: './analisys-brazilian-stock.component.html'
})
export class AnalisysBrazilianStockComponent implements OnInit {

    ticker: string = ""

    stockAnalisys = new AnalisysBrazilianStockDTO()

    constructor(private service: AnalisysBrazilianStockService){}

    ngOnInit(): void {
        //this.getAnalisys()
    }

    tickerChanged(event: string){
        this.ticker = event
        console.log(this.ticker)
    }

    private getAnalisys(){
        this.service.getAnalisys(this.ticker).subscribe(
            res => {
                this.stockAnalisys = res as AnalisysBrazilianStockDTO
            }
        )
        console.log(this.stockAnalisys)
    }

    search(){
        this.getAnalisys()
        console.log("Search")
    }

}