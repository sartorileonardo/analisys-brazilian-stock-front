import { AvaliacaoGeralDTO } from "./analisys-brazilian-stock.enum";

export class AnalisysBrazilianStockDTO {
    ticker: string = "";
    estaEmSetorPerene: boolean = false;
    estaForaDeRecuperacaoJudicial: boolean = false;
    possuiBomNivelRetornoSobrePatrimonio: boolean = false;
    possuiBomNivelCrescimentoLucroNosUltimos5Anos: boolean = false;
    possuiBomNivelMargemLiquida: boolean = false;
    possuiBomNivelDeCapacidadeDeQuitarDividaNoCurtoPrazo: boolean = false;
    possuiBomNivelDividaLiquidaSobrePatrimonioLiquido: boolean = false;
    possuiBomPrecoEmRelacaoAoLucroAssimComoValorPatrimonial: boolean = false;
    nomeEmpresa: string = "";
    segmentoEmpresa: string = "";
    avaliacaoGeralDTO: AvaliacaoGeralDTO = AvaliacaoGeralDTO.INDEFINIDO;
}