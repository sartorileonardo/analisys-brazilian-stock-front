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
                this.stockAnalisys = this.parseResponseToDTO(res)
            }
        )
        console.log(this.stockAnalisys)
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
        console.log("Search")
    }

    private clearTicker(){
        this.ticker = ""
    }

}