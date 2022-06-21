import { Component, OnInit } from "@angular/core";
import { AnalisysBrazilianStockDTO } from "../analisys-brazilian-stock.dto";
import { AvaliacaoGeralDTO } from "../analisys-brazilian-stock.enum";
import { AnalisysBrazilianStockService } from "../analisys-brazilian-stock.service";


@Component({
    selector: 'analisys-brazilian-stock',
    templateUrl: './analisys-brazilian-stock.component.html'
})
export class AnalisysBrazilianStockComponent implements OnInit {

    ticker: string = ""

    tickerIsEmpty: boolean = true

    progressBarValue: number = 0

    progressBarIsVisible: boolean = false

    stockAnalisys = new AnalisysBrazilianStockDTO()

    constructor(private service: AnalisysBrazilianStockService){}

    ngOnInit(): void {
        //this.getAnalisys()
    }

    tickerChanged(event: string){
        this.ticker = event
        console.log(this.ticker)
    }

    private async getAnalisys(){
        this.enableVisibleProgressBar()
        this.loadProgressBar()
        this.service.getAnalisys(this.ticker).subscribe(
            res => {
                this.stockAnalisys = this.parseResponseToDTO(res)
                this.tickerIsEmpty = res == undefined
            }
        )
        this.loadProgressBar()
        await this.delay(2000)
        this.disableVisibleProgressBar()
        console.log(this.stockAnalisys)
    }

    private loadProgressBar(){
        this.progressBarValue += 50
    }

    private parseResponseToDTO(res: any){
        let avaliacaoGeralDTO = AvaliacaoGeralDTO.INDEFINIDO;
        switch(res["avaliacaoGeralDTO"]){
            case 'OTIMO': avaliacaoGeralDTO = AvaliacaoGeralDTO.OTIMO;
            break;
            case 'BOM': avaliacaoGeralDTO = AvaliacaoGeralDTO.BOM;
            break;
            case 'REGULAR': avaliacaoGeralDTO = AvaliacaoGeralDTO.REGULAR;
            break;
            case 'RUIM': avaliacaoGeralDTO = AvaliacaoGeralDTO.RUIM;
            break;
            default: avaliacaoGeralDTO = AvaliacaoGeralDTO.INDEFINIDO;
        }
        const dto = res as AnalisysBrazilianStockDTO
        dto.avaliacaoGeralDTO = avaliacaoGeralDTO
        return dto
    }

    search(){
        this.getAnalisys()
        this.clearTicker()
        this.clearProgressBar()
        console.log("Search")
    }

    private clearTicker(){
        this.ticker = ""
    }

    private enableVisibleProgressBar(){
        this.progressBarIsVisible = true
    }

    private disableVisibleProgressBar(){
        this.progressBarIsVisible = false
    }

    private async clearProgressBar(){
        await this.delay(2000);
        this.progressBarValue = 0
    }

    private delay(ms: number) {
        return new Promise( resolve => setTimeout(resolve, ms) );
    }
    

}