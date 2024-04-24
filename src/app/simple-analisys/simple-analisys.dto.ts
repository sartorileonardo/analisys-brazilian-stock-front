import { SimpleAnalisysEstimate } from "./simple-analisys-estimate.enum";

export class SimpleAnalisysDTO {
    ticker: string = "";
    estaEmSetorPerene: boolean = false;
    estaForaDeRecuperacaoJudicial: boolean = false;
    possuiBomNivelRetornoSobrePatrimonio: boolean = false;
    possuiBomNivelCrescimentoLucroNosUltimos5Anos: boolean = false;
    possuiBomNivelMargemLiquida: boolean = false;
    possuiBomNivelMargemEbit: boolean = false;
    possuiBomNivelDeCapacidadeDeQuitarDividaNoCurtoPrazo: boolean = false;
    possuiBomNivelDividaLiquidaSobrePatrimonioLiquido: boolean = false;
    possuiBomPrecoEmRelacaoAoValorPatrimonial: boolean = false;
    possuiBomNivelPassivosSobreAtivos: boolean = false;
    nomeEmpresa: string = "";
    segmentoEmpresa: string = "";
    avaliacaoGeral: SimpleAnalisysEstimate = SimpleAnalisysEstimate.UNDEFINITE;
    createDate: Date = new Date();
}