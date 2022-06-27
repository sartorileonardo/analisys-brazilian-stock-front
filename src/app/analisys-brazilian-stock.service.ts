import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AnalisysBrazilianStockDTO } from './analisys-brazilian-stock.dto';
import { TickerDTO } from './ticker.model';

@Injectable({
  providedIn: 'root'
})
export class AnalisysBrazilianStockService {

  private baseUrl = "https://analisys-brazilian-stock.herokuapp.com/stock/analisys";
  //private baseUrl = "http://localhost:8888/stock/analisys";

  constructor(private http: HttpClient) { }

  getAnalisys(ticker: string): Observable<any> {
    return this.http.get(`${this.baseUrl}` + `/${ticker}`);
  }

  getTickers(): TickerDTO[] {
    return this.tokens
    .filter(it => it[0].slice(-1).includes("3"))
    .map(it => new TickerDTO(it[0], it[1].replace("- ", "")))
  }

  tokens = [ ['AALR3 ', ' - ALLIAR'],['ABCB4', ' - ABC Brasil'],['ABCP11', ' - FUNDO DE INVESTIMENTO IMOBILIÁRIO GRAND PLAZA SHOPPING'],['ABEV3', ' - AMBEV S/A'],['AERI3', ' - AERIS'],['AESB3', ' - AES BRASIL'],['AFHI11', ' - AF INVEST CRI FUNDO DE INVESTIMENTO IMOBILIÁRIO - RECEBÍVEIS IMOBILIÁRIOS'],['AFLT3', ' - AFLUENTE T'],['AFOF11', ' - ALIANZA FOF FUNDO DE INVESTIMENTO IMOBILIÁRIO'],['AGRO3', ' - BRASILAGRO'],['AGXY3', ' - AGROGALAXY'],['AHEB6', ' - PARQUE ANHEMBI'],['AIEC11', ' - AUTONOMY EDIFÍCIOS CORPORATIVOS FUNDO DE INVESTIMENTO IMOBILIÁRIO - FII'],['ALLD3', ' - ALLIED'],['ALMI11', ' - FII TORRE ALMIRANTE'],['ALPA4', ' - ALPARGATAS'],['ALPA3', ' - ALPARGATAS'],['ALPK3', ' - ESTAPAR'],['ALSO3', ' - ALIANSCSONAE'],['ALUP11', ' - ALUPAR'],['ALUP4', ' - ALUPAR'],['ALUP3', ' - ALUPAR'],['ALZR11', ' - ALIANZA TRUST RENDA IMOBILIARIA - FUNDO DE INVESTIMENTO IMOBILIARIO'],['AMAR3', ' - LOJAS MARISA'],['AMBP3', ' - AMBIPAR'],['AMER3', ' - AMERICANAS'],['ANIM3', ' - ANIMA'],['APER3', ' - ALPER S.A.'],['APTO11', ' - NAVI RESIDENCIAL FUNDO DE INVESTIMENTO IMOBILIÁRIO'],['ARCT11', ' - RIZA ARCTIUM REAL ESTATE FUNDO DE INVESTIMENTO IMOBILIÁRIO'],['ARML3', ' - ARMAC'],['ARRI11', ' - FUNDO DE INVESTIMENTO IMOBILIÁRIO ÁTRIO REIT RECEBÍVEIS IMOBILIÁRIOS'],['ARZZ3', ' - AREZZO CO'],['ASAI3', ' - ASSAI'],['ATMP3', ' - ATMASA'],['ATOM3', ' - ATOMPAR'],['ATSA11', ' - HEDGE ATRIUM SHOPPING SANTO ANDRÉ FUNDO DE INVESTIMENTO IMOBILIÁRIO'],['AURA33', ' - AURA 360'],['AURE3', ' - AUREN'],['AVLL3', ' - ALPHAVILLE'],['AZEV4', ' - AZEVEDO & TRAVASSOS'],['AZEV3', ' - AZEVEDO & TRAVASSOS'],['AZUL4', ' - AZUL'],['B3SA3', ' - B3'],['BAHI3', ' - BAHEMA'],['BAHI11', ' - BAHEMA'],['BALM4', ' - BAUMER'],['BALM3', ' - BAUMER'],['BARI11', ' - FUNDO DE INVESTIMENTO IMOBILIÁRIO BARIGUI RENDIMENTOS IMOBILIÁRIOS I FII'],['BAUH4', ' - EXCELSIOR'],['BAZA3', ' - BANCO DA AMAZONIA S.A.'],['BBAS3', ' - BANCO DO BRASIL S.A.'],['BBDC4', ' - BANCO BRADESCO S.A.'],['BBDC3', ' - BANCO BRADESCO S.A.'],['BBFI11', ' - BB FUNDO DE INVESTIMENTO IMOBILIARIO PROGRESSIVO'],['BBFO11', ' - BB FUNDO DE FUNDOS - FUNDO DE INVESTIMENTO IMOBILIÁRIO'],['BBGO11', ' - BB FUNDO DE INVESTIMENTO DE CRÉDITO FIAGRO-IMOBILIÁRIO'],['BBPO11', ' - BB PROGRESSIVO II FUNDO DE INVESTIMENTO IMOBILIÁRIO - FII'],['BBRC11', ' - BB RENDA CORPORATIVA FUNDO DE INVESTIMENTO IMOBILIÁRIO - FII'],['BBSE3', ' - BBSEGURIDADE'],['BCFF11', ' - FUNDO DE INVESTIMENTO IMOBILIÁRIO - FII BTG PACTUAL FUNDO DE FUNDOS'],['BCIA11', ' - BRADESCO CARTEIRA IMOBILIÁRIA ATIVA - FUNDO DE FUNDOS DE INVESTIMENTO IMOBILIÁRIO - FII'],['BCRI11', ' - BANESTES RECEBIVEIS IMOBILIARIOS FUNDO DE INVESTIMENTO IMOBILIARIO'],['BDLL3', ' - BAEDELLA'],['BDLL4', ' - BAEDELLA'],['BEEF3', ' - Minerva'],['BEES3', ' - BANESTES S/A'],['BEES4', ' - BANESTES S/A'],['BGIP4', ' - BANESE'],['BGIP3', ' - BANESE'],['BICR11', ' - INTER TITULOS IMOBILIARIOS FUNDO DE INVESTIMENTO IMOBILIARIO'],['BIDI11', ' - BANCO INTER'],['BIDI4', ' - BANCO INTER'],['BIDI3', ' - BANCO INTER'],['BIME11', ' - BRIO MULTIESTRATEGIA - FUNDO DE INVESTIMENTO IMOBILIARIO'],['BIOM3', ' - BIOMM SA'],['BKBR3', ' - BK BRASIL'],['BLAU3', ' - BLAU'],['BLCA11', ' - BLUEMACAW CATUAÍ TRIPLE A FUNDO DE INVESTIMENTO IMOBILIÁRIO'],['BLCP11', ' - BLUECAP RENDA LOGÍSTICA FUNDO DE INVESTIMENTO IMOBILIÁRIO -FII'],['BLMC11', ' - BLUEMACAW CRÉDITO IMOBILIÁRIO - FUNDO DE INVESTIMENTO IMOBILIÁRIO'],['BLMG11', ' - BLUEMACAW LOGÍSTICA FUNDO DE INVESTIMENTO IMOBILIÁRIO'],['BLMO11', ' - BLUEMACAW OFFICE FUND II - FUNDO DE INVESTIMENTO IMOBILIÁRIO'],['BLMR11', ' - BLUEMACAW RENDA+ FOF FUNDO DE INVESTIMENTO IMOBILIÁRIO'],['BLUR11', ' - FUNDO DE INVESTIMENTO IMOBILIÁRIO - BLUE RECEBÍVEIS IMOBILIÁRIOS'],['BLUT4', ' - B TECH EQI'],['BLUT3', ' - B TECH EQI'],['BMEB4', ' - BANCO MERCANTIL DO BRASIL S/A'],['BMEB3', ' - BANCO MERCANTIL DO BRASIL S/A'],['BMGB4', ' - BANCO BMG'],['BMIN4', ' - BANCO MERCANTIL DE INVESTIMENTOS SA'],['BMIN3', ' - BANCO MERCANTIL DE INVESTIMENTOS SA'],['BMKS3', ' - MONARK'],['BMLC11', ' - FII BM BRASCAN LAJES CORPORATIVAS'],['BMOB3', ' - BEMOBI TECH'],['BNBR3', ' - BANCO DO NORDESTE'],['BNFS11', ' - BANRISUL NOVAS FRONTEIRAS FUNDO DE INVESTIMENTO IMOBILIARIO - FII'],['BOAS3', ' - BOA VISTA'],['BOBR4', ' - BOMBRIL SA'],['BPAC11', ' - BTGP BANCO'],['BPAC3', ' - BTGP BANCO'],['BPAC5', ' - BTGP BANCO'],['BPAN4', ' - BANCO PAN'],['BPFF11', ' - FUNDO DE INVESTIMENTO IMOBILIÁRIO - FII BRASIL PLURAL ABSOLUTO FUNDO DE FUNDOS'],['BPML11', ' - FUNDO DE INVESTIMENTO IMOBILIÁRIO BTG PACTUAL SHOPPINGS'],['BPRP11', ' - FUNDO DE INVESTIMENTO IMOBILIARIO - FII BRLPROP'],['BRAP4', ' - BRADESPAR S/A'],['BRAP3', ' - BRADESPAR S/A'],['BRBI11', ' - BR PARTNERS'],['BRCO11', ' - BRESCO LOGÍSTICA FUNDO DE INVESTIMENTO IMOBILIÁRIO'],['BRCR11', ' - FUNDO DE INVESTIMENTO IMOBILIÁRIO - FII BTG PACTUAL CORPORATE OFFICE FUND'],['BREV11', ' - BRAZIL REAL ESTATE VICTORY FUND I - FUNDO DE INVESTIMENTO IMOBILIARIO'],['BRFS3', ' - BRF Foods'],['BRGE3', ' - CONSORCIO ALFA'],['BRGE8', ' - CONSORCIO ALFA'],['BRGE6', ' - CONSORCIO ALFA'],['BRGE5', ' - CONSORCIO ALFA'],['BRIM11', ' - BRIO REAL ESTATE II - FUNDO DE INVESTIMENTO IMOBILIÁRIO'],['BRIT3', ' - BRISANET'],['BRIV4', ' - ALFA DE INVESTIMENTO'],['BRIV3', ' - ALFA DE INVESTIMENTO'],['BRKM5', ' - BRASKEM'],['BRKM3', ' - BRASKEM'],['BRKM6', ' - BRASKEM'],['BRLA11', ' - FUNDO DE INVESTIMENTO IMOBILIÁRIO - BRL PROP II'],['BRML3', ' - BR MALLS PARTICIPAÇÔES S/A'],['BRPR3', ' - BR PROPERTIES'],['BRSR6', ' - BANRISUL S/A'],['BRSR3', ' - BANRISUL S/A'],['BRSR5', ' - BANRISUL S/A'],['BSLI4', ' - BRB'],['BSLI3', ' - BRB'],['BTAL11', ' - FUNDO DE INVESTIMENTO IMOBILIÁRIO BTG PACTUAL AGRO LOGÍSTICA'],['BTCR11', ' - FUNDO DE INVESTIMENTO IMOBILIARIO - BTG PACTUAL CREDITO IMOBILIARIO'],['BTCR12', ' - FUNDO DE INVESTIMENTO IMOBILIARIO - BTG PACTUAL CREDITO IMOBILIARIO'],['BTLG11', ' - BTG PACTUAL LOGÍSTICA FUNDO DE INVESTIMENTO IMOBILIÁRIO'],['BTRA11', ' - FUNDO DE INVESTIMENTO IMOBILIÁRIO BTG PACTUAL TERRAS AGRÍCOLAS'],['BTWR11', ' - BTOWERS FUNDO DE INVESTIMENTO IMOBILIÁRIO'],['CACR11', ' - CARTESIA RECEBÍVEIS IMOBILIÁRIOS - FUNDO DE INVESTIMENTO IMOBILIÁRIO'],['CALI3', ' - CAL S/A'],['CAMB3', ' - PENALTY'],['CAML3', ' - CAMIL'],['CARD3', ' - CSU CARDSYST'],['CARE11', ' - BRAZILIAN GRAVEYARD AND DEATH CARE SERVICES FUNDO DE INVESTIMENTO IMOBILIÁRIO - FII'],['CASH3', ' - MELIUZ'],['CBAV3', ' - CBA'],['CBEE3', ' - AMPLA ENERG'],['CBOP11', ' - CASTELLO BRANCO OFFICE PARK FUNDO DE INVESTIMENTO IMOBILIÁRIO - FII'],['CCRF11', ' - RBR CRI - FUNDO DE INVESTIMENTO IMOBILIÁRIO'],['CCRO3', ' - COMPANHIA DE CONCESSÕES RODOVIÁRIAS'],['CEAB3', ' - CEA MODAS'],['CEBR6', ' - CEB - COMPANHIA ENERGÉTICA DE BRASÍLIA'],['CEBR5', ' - CEB - COMPANHIA ENERGÉTICA DE BRASÍLIA'],['CEBR3', ' - CEB - COMPANHIA ENERGÉTICA DE BRASÍLIA'],['CEDO3', ' - CIA. DE FIAÇÃO E TECIDOS CEDRO CACHOEIRA'],['CEDO4', ' - CIA. DE FIAÇÃO E TECIDOS CEDRO CACHOEIRA'],['CEEB3', ' - COELBA'],['CEEB5', ' - COELBA'],['CEED4', ' - CEEE-D'],['CEED3', ' - CEEE-D'],['CEGR3', ' - CEG'],['CEOC11', ' - FUNDO DE INVESTIMENTO IMOBILIARIO - FII CEO CYRELA COMMERCIAL PROPERTIES'],['CEPE6', ' - CELPE'],['CEPE5', ' - CELPE'],['CGAS5', ' - COMPANHIA DE GÁS DE SÃO PAULO - COMGÁS'],['CGAS3', ' - COMPANHIA DE GÁS DE SÃO PAULO - COMGÁS'],['CGRA4', ' - GRAZZIOTIN'],['CGRA3', ' - GRAZZIOTIN'],['CIEL3', ' - CIELO'],['CLSA3', ' - CLEARSALE'],['CLSC4', ' - CELESC'],['CLSC3', ' - CELESC'],['CMIG4', ' - CEMIG'],['CMIG3', ' - CEMIG'],['CMIN3', ' - CSNMINERACAO'],['CNES11', ' - FII CENESP'],['COCE5', ' - CIA ENERG CEARA - COELCE'],['COGN3', ' - COGNA'],['CORM11', ' - CORE METROPOLIS FUNDO DE INVESTIMENTO IMOBILIÁRIO'],['CPFE3', ' - CPFL ENERGIA S.A.'],['CPFF11', ' - CAPITÂNIA REIT FOF - FUNDO DE INVESTIMENTO IMOBILIÁRIO'],['CPLE6', ' - COPEL'],['CPLE11', ' - COPEL'],['CPLE3', ' - COPEL'],['CPLE5', ' - COPEL'],['CPTS11', ' - CAPITÂNIA SECURITIES II FUNDO DE INVESTIMENTO IMOBILIÁRIO - FII'],['CRDE3', ' - CR2'],['CRFB3', ' - CARREFOUR BR'],['CRFF11', ' - CAIXA RIO BRAVO FUNDO DE FUNDOS DE INVESTIMENTO IMOBILIÁRIO II'],['CRIV3', ' - ALFA FINANCEIRA'],['CRIV4', ' - ALFA FINANCEIRA'],['CRPG5', ' - CRISTAL'],['CRPG6', ' - CRISTAL'],['CRPG3', ' - CRISTAL'],['CSAB3', ' - COMPANHIA DE SEGUROS ALIANÇA DA BAHIA'],['CSAB4', ' - COMPANHIA DE SEGUROS ALIANÇA DA BAHIA'],['CSAN3', ' - COSAN SA INDUSTRIA E COMERCIO'],['CSED3', ' - CRUZEIRO EDU'],['CSMG3', ' - COPASA MG'],['CSNA3', ' - CSN'],['CSRN3', ' - COSERN'],['CSRN5', ' - COSERN'],['CSRN6', ' - COSERN'],['CTKA4', ' - KARSTEN'],['CTNM4', ' - COTEMINAS'],['CTNM3', ' - COTEMINAS'],['CTSA4', ' - SANTANENSE'],['CTSA3', ' - SANTANENSE'],['CTXT11', ' - FUNDO DE INVESTIMENTO IMOBILIÁRIO CENTRO TEXTIL INTERNACIONAL'],['CURY3', ' - CURY S/A'],['CVBI11', ' - FUNDO DE INVESTIMENTO IMOBILIÁRIO - VBI CRI'],['CVCB3', ' - CVC BRASIL'],['CXAG11', ' - FUNDO DE INVESTIMENTO IMOBILIÁRIO CAIXA AGENCIAS'],['CXCE11', ' - FUNDO DE INVESTIMENTO IMOBILIARIO CAIXA CEDAE'],['CXCI11', ' - FUNDO DE INVESTIMENTO IMOBILIÁRIO CAIXA CARTEIRA IMOBILIÁRIA'],['CXCO11', ' - FUNDO DE INVESTIMENTO IMOBILIÁRIO CAIXA IMÓVEIS CORPORATIVOS'],['CXRI11', ' - CAIXA RIO BRAVO FUNDO DE FUNDOS DE INVESTIMENTO IMOBILIARIO - FII'],['CXSE3', ' - CAIXA SEGURI'],['CXTL11', ' - FUNDO DE INVESTIMENTO IMOBILIARIO CAIXA SEQ LOGISTICA RENDA'],['CYRE3', ' - CYRELA BRAZIL REALTY'],['DASA3', ' - DIAGNOSTICOS DA AMERICA SA'],['DCRA11', ' - DEVANT FUNDO DE INVESTIMENTO NAS CADEIAS PRODUTIVAS AGROINDUSTRIAIS - FIAGRO-IMOBILIÁRIO'],['DESK3', ' - DESKTOPSIGMA'],['DEVA11', ' - DEVANT RECEBÍVEIS IMOBILIÁRIOS FUNDO DE INVESTIMENTO IMOBILIÁRIO'],['DEXP3', ' - DEXXOS PAR'],['DEXP4', ' - DEXXOS PAR'],['DIRR3', ' - Direcional Engenharia'],['DMMO3', ' - DOMMO'],['DMVF3', ' - D1000VFARMA'],['DOHL4', ' - DOHLER'],['DOTZ3', ' - DOTZ SA'],['DRIT11', ' - MULTIGESTÃO RENDA COMERCIAL FUNDO DE INVESTIMENTO IMOBILIÁRIO - FII'],['DTCY3', ' - DTCOM'],['DVFF11', ' - FUNDO DE INVESTIMENTO IMOBILIÁRIO - DEVANT FUNDO DE FUNDOS IMOBILIÁRIOS'],['DXCO3', ' - DEXCO'],['EALT4', ' - ELECTRO AÇO ALTONA S/A'],['EALT3', ' - ELECTRO AÇO ALTONA S/A'],['ECOR3', ' - ECORODOVIAS'],['EDFO11', ' - FII EDIFÍCIO OURINVEST'],['EDGA11', ' - FUNDO DE INVESTIMENTO IMOBILIARIO - FII EDIFICIO GALERIA'],['EEEL4', ' - CEEE'],['EEEL3', ' - CEEE'],['EGAF11', ' - ECOAGRO I FUNDO DE INVESTIMENTO NAS CADEIAS PRODUTIVAS AGROINDUSTRIAIS - FIAGRO - IMOBILIÁRIO'],['EGIE3', ' - ENGIE BRASIL'],['EKTR4', ' - ELEKTRO ELETRICIDADE E SERVIÇOS S.A.'],['EKTR3', ' - ELEKTRO ELETRICIDADE E SERVIÇOS S.A.'],['ELET3', ' - ELETROBRÁS'],['ELET6', ' - ELETROBRÁS'],['ELMD3', ' - ELETROMIDIA'],['EMAE4', ' - EMAE'],['EMBR3', ' - EMBRAER'],['ENAT3', ' - ENAUTA PART'],['ENBR3', ' - EDP ENERGIAS DO BRASIL S/A'],['ENEV3', ' - ENEVA'],['ENGI11', ' - ENERGISA'],['ENGI4', ' - ENERGISA'],['ENGI3', ' - ENERGISA'],['ENJU3', ' - ENJOEI'],['ENMT3', ' - ENERGISA MT'],['ENMT4', ' - ENERGISA MT'],['EPAR3', ' - EMBPAR S/A'],['EQIR11', ' - EQI RECEBÍVEIS IMOBILIÁRIOS FUNDO DE INVESTIMENTO FII'],['EQMA3B', ' - CEMAR'],['EQPA3', ' - EQTL PARA'],['EQPA5', ' - EQTL PARA'],['EQPA7', ' - EQTL PARA'],['EQTL3', ' - EQUATORIAL ENERGIA S.A.'],['ERPA11', ' - EUROPA 105 - FUNDO DE INVESTIMENTO IMOBILIÁRIO'],['ESPA3', ' - ESPACOLASER'],['ETER3', ' - ETERNIT'],['EUCA4', ' - EUCATEX'],['EUCA3', ' - EUCATEX'],['EURO11', ' - FII EUROPAR'],['EVBI11', ' - VBI CONSUMO ESSENCIAL FUNDO DE INVESTIMENTO IMOBILIÁRIO'],['EVEN3', ' - Even'],['EZTC3', ' - EZTec'],['FAED11', ' - FII ANHANGUERA EDUCACIONAL'],['FAMB11', ' - FII EDIFICIO ALMIRANTE BARROSO'],['FATN11', ' - FUNDO DE INVESTIMENTO IMOBILIÁRIO ATHENA I'],['FCFL11', ' - FII CAMPUS FARIA LIMA'],['FESA4', ' - FERBASA'],['FESA3', ' - FERBASA'],['FEXC11', ' - FUNDO DE INVESTIMENTO IMOBILIÁRIO - FII BTG PACTUAL FUNDO DE CRI'],['FGAA11', ' - FG/AGRO FUNDO DE INVESTIMENTO NAS CADEIAS PRODUTIVAS AGROINDUSTRIAIS - FIAGRO-IMOBILIÁRIO'],['FHER3', ' - Fer Heringer'],['FIGS11', ' - GENERAL SHOPPING ATIVO E RENDA FUNDO DE INVESTIMENTO IMOBILIÁRIO'],['FIIB11', ' - FUNDO DE INVESTIMENTO IMOBILIARIO INDUSTRIAL DO BRASIL'],['FIIP11', ' - RB CAPITAL RENDA I FUNDO DE INVESTIMENTO IMOBILIARIO - FII'],['FIQE3', ' - UNIFIQUE'],['FLCR11', ' - FARIA LIMA CAPITAL RECEBÍVEIS IMOBILIÁRIOS I - FUNDO DE INVESTIMENTO IMOBILIÁRIO'],['FLMA11', ' - FII CONTINENTAL SQUARE FARIA LIMA'],['FLRP11', ' - FII FLORIPA SHOPPING'],['FLRY3', ' - FLEURY'],['FMOF11', ' - FII MEMORIAL OFFICE'],['FPAB11', ' - FII PROJ AGUA BRANCA'],['FPNG11', ' - FUNDO DE INVESTIMENTO IMOBILIÁRIO PEDRA NEGRA RENDA IMOBILIÁRIA'],['FRAS3', ' - FRAS-LE S.A.'],['FRIO3', ' - Metalfrio'],['FRTA3', ' - POMIFRUTAS'],['FVPQ11', ' - FUNDO DE INVESTIMENTO IMOBILIÁRIO VIA PARQUE SHOPPING - FII'],['GALG11', ' - Fundo de Investimento Imobiliário Guardian Logística'],['GAME11', ' - FUNDO DE INVESTIMENTO IMOBILIÁRIO GUARDIAN MULTIESTRATÉGIA IMOBILIÁRIA I'],['GCFF11', ' - GALAPAGOS FUNDO DE FUNDOS - FII FUNDO DE INVESTIMENTO IMOBILIÁRIO'],['GCRA11', ' - GALAPAGOS RECEBÍVEIS DO AGRONEGÓCIO - FIAGRO-IMOBILIÁRIO'],['GCRI11', ' - GALAPAGOS RECEBÍVEIS IMOBILIÁRIOS - FUNDO DE INVESTIMENTO IMOBILIÁRIO'],['GEPA4', ' - DUKE ENERGY INT,GERAÇÃO PARANAPANEMA SA'],['GEPA3', ' - DUKE ENERGY INT,GERAÇÃO PARANAPANEMA SA'],['GETT4', ' - GETNET BR'],['GETT3', ' - GETNET BR'],['GFSA3', ' - GAFISA'],['GGBR4', ' - GERDAU S.A.'],['GGBR3', ' - GERDAU S.A.'],['GGPS3', ' - GPS'],['GGRC11', ' - GGR COVEPI RENDA FUNDO DE INVESTIMENTO IMOBILIÁRIO'],['GMAT3', ' - GRUPO MATEUS'],['GOAU4', ' - METALÚRGICA GERDAU'],['GOAU3', ' - METALÚRGICA GERDAU'],['GOLL4', ' - GOL LINHAS AEREAS INTELIGENTES SA'],['GPAR3', ' - CELGPAR'],['GPIV33', ' - GP INVESTMENTS, LTD'],['GRND3', ' - GRENDENE SA'],['GSHP3', ' - Generalshopp'],['GTLG11', ' - GTIS BRAZIL LOGISTICS FUNDO DE INVESTIMENTO IMOBILIÁRIO - FII'],['GTWR11', ' - FUNDO DE INVESTIMENTO IMOBILIÁRIO GREEN TOWERS'],['GUAR3', ' - GUARARAPES CONFECÇÕES'],['HAAA11', ' - HEDGE AAA FUNDO DE INVESTIMENTO IMOBILIÁRIO'],['HABT11', ' - HABITAT RECEBÍVEIS PULVERIZADOS FUNDO DE INVESTIMENTO IMOBILIÁRIO'],['HAGA3', ' - HAGA'],['HAGA4', ' - HAGA'],['HAPV3', ' - HAPVIDA'],['HBCR11', ' - FUNDO DE INVESTIMENTO IMOBILIÁRIO HBC RENDA URBANA'],['HBOR3', ' - Helbor'],['HBRE3', ' - HBR REALTY'],['HBRH11', ' - FUNDO DE INVESTIMENTO IMOBILIÁRIO MULTI RENDA URBANA'],['HBSA3', ' - HIDROVIAS'],['HBTS5', ' - CIA HABITASUL'],['HCHG11', ' - HECTARE RECEBÍVEIS HIGH GRADE FUNDO DE INVESTIMENTO IMOBILIÁRIO - FII'],['HCRI11', ' - FII HOSPITAL DA CRIANÇA'],['HCTR11', ' - HECTARE CE - FUNDO DE INVESTIMENTO IMOBILIÁRIO'],['HETA4', ' - HERCULES S/A'],['HFOF11', ' - HEDGE TOP FOFII 3 FUNDO DE INVESTIMENTO IMOBILIÁRIO'],['HGBS11', ' - HEDGE BRASIL SHOPPING FUNDO DE INVESTIMENTO IMOBILIÁRIO'],['HGCR11', ' - CSHG RECEBÍVEIS IMOBILIÁRIOS - FUNDO DE INVESTIMENTO IMOBILIÁRIO - FII'],['HGFF11', ' - CSHG IMOBILIÁRIO FOF - FUNDO DE INVESTIMENTO IMOBILIÁRIO - FII'],['HGIC11', ' - HGI CRÉDITOS IMOBILIÁRIOS FUNDO DE INVESTIMENTO IMOBILIÁRIO'],['HGLG11', ' - CSHG LOGÍSTICA - FUNDO DE INVESTIMENTO IMOBILIÁRIO - FII'],['HGPO11', ' - CSHG PRIME OFFICES - FUNDO DE INVESTIMENTO IMOBILIÁRIO FII'],['HGRE11', ' - CSHG REAL ESTATE - FUNDO DE INVESTIMENTO IMOBILIÁRIO - FII'],['HGRU11', ' - CSHG RENDA URBANA - FUNDO DE INVESTIMENTO IMOBILIARIO - FII'],['HLOG11', ' - HEDGE LOGÍSTICA FUNDO DE INVESTIMENTO IMOBILIÁRIO'],['HOOT4', ' - HOTEIS OTHON S.A.'],['HOSI11', ' - FUNDO DE INVESTIMENTO IMOBILIÁRIO HOUSI'],['HPDP11', ' - HEDGE SHOPPING PARQUE DOM PEDRO FUNDO DE INVESTIMENTO IMOBILIÁRIO'],['HRDF11', ' - HEDGE REALTY DEVELOPMENT FUNDO DE INVESTIMENTO IMOBILIÁRIO'],['HREC11', ' - HEDGE RECEBÍVEIS IMOBILIÁRIOS FUNDO DE INVESTIMENTO IMOBILIÁRIO'],['HSAF11', ' - HSI ATIVOS FINANCEIROS - FUNDO DE INVESTIMENTO IMOBILIÁRIO'],['HSLG11', ' - HSI LOGÍSTICA FUNDO DE INVESTIMENTO IMOBILIÁRIO'],['HSML11', ' - HSI MALLS FUNDO DE INVESTIMENTO IMOBILIÁRIO'],['HSRE11', ' - HSI RENDA IMOBILIÁRIA FUNDO DE INVESTIMENTO IMOBILIÁRIO'],['HTMX11', ' - FII HOTEL MAXINVEST'],['HUCG11', ' - Fundo de Investimento Imobiliário Hospital Unimed Campina Grande'],['HUSC11', ' - FUNDO DE INVESTIMENTO IMOBILIARIO HOSPITAL UNIMED SUL CAPIXABA'],['HYPE3', ' - HYPERA'],['IBCR11', ' - FUNDO DE INVESTIMENTO IMOBILIÁRIO DE CRI INTEGRAL BREI'],['IBFF11', ' - FUNDO DE INVESTIMENTO IMOBILIARIO FOF INTEGRAL BREI'],['IDFI11', ' - Fundo de Investimento Imobiliário de Unidades Autônomas'],['IDGR11', ' - Fundo de Investimento Imobiliário de Unidades Autônomas II'],['IFCM3', ' - INFRACOMM'],['IGBR3', ' - GRADIENTE'],['IGTI11', ' - IGUATEMI S.A'],['IGTI3', ' - IGUATEMI S.A'],['INEP3', ' - INEPAR S/A'],['INEP4', ' - INEPAR S/A'],['INTB3', ' - INTELBRAS'],['IRBR3', ' - IRBBRASIL RE'],['IRDM11', ' - FUNDO DE INVESTIMENTO IMOBILIARIO IRIDIUM RECEBIVEIS IMOBILIARIOS'],['IRIM11', ' - IRIDIUM FUNDO DE INVESTIMENTO IMOBILIÁRIO'],['ITIP11', ' - INTER TEVA ÍNDICE DE PAPEL FUNDO DE INVESTIMENTO IMOBILIÁRIO - FII'],['ITIT11', ' - INTER TEVA ÍNDICE DE TIJOLO FUNDO DE INVESTIMENTO IMOBILIÁRIO - FII'],['ITSA4', ' - ITAÚSA'],['ITSA3', ' - ITAÚSA'],['ITUB4', ' - ITAUUNIBANCO'],['ITUB3', ' - ITAUUNIBANCO'],['JALL3', ' - JALLESMACHAD'],['JBFO11', ' - JBFO FOF FUNDO DE INVESTIMENTO IMOBILIÁRIO'],['JBSS3', ' - JBS'],['JFEN3', ' - JOÃO FORTES ENGENHARIA S.A.'],['JFLL11', ' - JFL LIVING FUNDO DE INVESTIMENTO IMOBILIÁRIO'],['JGPX11', ' - FUNDO DE INVESTIMENTO NAS CADEIAS PRODUTIVAS AGROINDUSTRIAIS JGP CRÉDITO - FIAGRO - IMOBILIÁRIO'],['JHSF3', ' - JHSF Part'],['JOPA3', ' - JOSAPAR S/A'],['JOPA4', ' - JOSAPAR S/A'],['JPPA11', ' - JPP ALLOCATON MOGNO FUNDO DE INVESTIMENTO IMOBILIÁRIO'],['JPPC11', ' - JPP CAPITAL FUNDO DE INVESTIMENTO IMOBILIÁRIO - FII'],['JRDM11', ' - FII SHOPPING JARDIM SUL'],['JSAF11', ' - JS ATIVOS FINANCEIROS FUNDO DE INVESTIMENTO IMOBILIÁRIO'],['JSLG3', ' - JULIO SIMOES'],['JSRE11', ' - JS REAL ESTATE MULTIGESTÃO - FII'],['KEPL3', ' - KEPLER WEBER SA'],['KEVE11', ' - EVEN II KINEA FUNDO DE INVESTIMENTO IMOBILIÁRIO'],['KFOF11', ' - FUNDO DE FUNDOS DE INVESTIMENTO IMOBILIÁRIO KINEA FII'],['KINP11', ' - EVEN PERMUTA KINEA FII - FUNDO DE INVESTIMENTO IMOBILIÁRIO'],['KISU11', ' - KILIMA FUNDO DE INVESTIMENTO EM COTAS DE FUNDOS IMOBILIÁRIOS SUNO 30'],['KIVO11', ' - KILIMA VOLKANO RECEBÍVEIS IMOBILIARIOS FUNDO DE INVESTIMENTO IMOBILIARIO'],['KLBN11', ' - KLABIN'],['KLBN4', ' - KLABIN'],['KLBN3', ' - KLABIN'],['KNCA11', ' - KINEA CRÉDITO AGRO FIAGRO-IMOBILIÁRIO'],['KNCR11', ' - KINEA RENDIMENTOS IMOBILIARIOS FUNDO DE INVESTIMENTO IMOBILIARIO - FII'],['KNHY11', ' - KINEA HIGH YIELD CRI FUNDO DE INVESTIMENTO IMOBILIÁRIO - FII'],['KNIP11', ' - KINEA ÍNDICES DE PREÇOS FUNDO DE INVESTIMENTO IMOBILIÁRIO - FII'],['KNRE11', ' - KINEA II REAL ESTATE EQUITY FII'],['KNRI11', ' - KINEA RENDA IMOBILIÁRIA FUNDO DE INVESTIMENTO IMOBILIÁRIO - FII'],['KNSC11', ' - KINEA SECURITIES FUNDO DE INVESTIMENTO IMOBILIÁRIO - FII'],['KRSA3', ' - KORA SAUDE'],['LASC11', ' - LEGATUS SHOPPINGS FUNDO DE INVESTIMENTO IMOBILIÁRIO - FII'],['LATR11', ' - LATERES FUNDO DE INVESTIMENTO IMOBILIÁRIO - FII'],['LAVV3', ' - LAVVI'],['LCAM3', ' - LOCAMERICA'],['LEVE3', ' - MAHLE METAL LEVE'],['LFTT11', ' - LOFT II FUNDO DE INVESTIMENTO IMOBILIÁRIO'],['LGCP11', ' - LOGCP INTER FUNDO DE INVESTIMENTO IMOBILIARIO'],['LIGT3', ' - LIGHT SA'],['LIPR3', ' - LIGHTPAR'],['LJQQ3', ' - QUERO-QUERO'],['LLIS3', ' - LE LIS BLANC DEUX'],['LOGG3', ' - LOG COM PROP'],['LOGN3', ' - Log-In'],['LPSB3', ' - LOPES BRASIL'],['LREN3', ' - RENNER'],['LSAG11', ' - LESTE FUNDO DE INVESTIMENTO NAS CADEIAS PRODUTIVAS AGROINDUSTRIAIS- FIAGRO - IMOBILIÁRIO'],['LSPA11', ' - LESTE RIVA EQUITY PREFERENCIAL I FUNDO DE INVESTIMENTO IMOBILIÁRIO'],['LUGG11', ' - LUGGO FUNDO DE INVESTIMENTO IMOBILIÁRIO - FII'],['LUPA3', ' - LUPATECH'],['LUXM4', ' - TREVISA INVESTIMENTOS SA'],['LVBI11', ' - FUNDO DE INVESTIMENTO IMOBILIARIO - VBI LOGISTICO'],['LVTC3', ' - WDC NETWORKS'],['LWSA3', ' - LOCAWEB'],['MALL11', ' - MALLS BRASIL PLURAL FUNDO DE INVESTIMENTO IMOBILIÁRIO'],['MAPT4', ' - CIA MARCOPOLO'],['MATD3', ' - MATER DEI'],['MATV11', ' - MORE GESTÃO ATIVA DE RECEBÍVEIS FUNDO DE INVESTIMENTO IMOBILIÁRIO'],['MAXR11', ' - FII MAX RETAIL'],['MBLY3', ' - MOBLY'],['MBRF11', ' - FUNDO DE INVESTIMENTO IMOBILIÁRIO MERCANTIL DO BRASIL - FII'],['MCCI11', ' - FUNDO DE INVESTIMENTO IMOBILIÁRIO MAUÁ CAPITAL RECEBÍVEIS IMOBILIÁRIOS - FII'],['MCHF11', ' - MAUÁ CAPITAL HEDGE FUND FUNDO DE INVESTIMENTO IMOBILIÁRIO'],['MCHY11', ' - FUNDO DE INVESTIMENTO IMOBILIÁRIO MAUÁ HIGH YIELD - FII'],['MDIA3', ' - M.DIASBRANCO'],['MDNE3', ' - MOURA DUBEUX'],['MEAL3', ' - IMC S/A'],['MEGA3', ' - OMEGAENERGIA'],['MELK3', ' - MELNICK'],['MERC4', ' - MERCANTIL BRASIL'],['MERC3', ' - MERCANTIL BRASIL'],['MFAI11', ' - Mérito Fundos e Ações Imobiliárias FII - Fundo de Investimento Imobiliário'],['MFII11', ' - MERITO DESENVOLVIMENTO IMOBILIARIO I FII - FUNDO DE INVESTIMENTO IMOBILIARIO'],['MGCR11', ' - FUNDO DE INVESTIMENTO IMOBILIÁRIO MOGNO CERTIFICADOS DE RECEBÍVEIS IMOBILIÁRIOS HIGH GRADE'],['MGEL4', ' - MANGELS'],['MGFF11', ' - FUNDO DE INVESTIMENTO IMOBILIARIO MOGNO FUNDO DE FUNDOS'],['MGHT11', ' - FUNDO DE INVESTIMENTO IMOBILIÁRIO - MOGNO HOTEIS'],['MGLG11', ' - MOGNO SUNO LOGISTICA FUNDO DE INVESTIMENTO IMOBILIARIO'],['MGLU3', ' - MAGAZ LUIZA'],['MILS3', ' - MILLS'],['MLAS3', ' - MULTILASER'],['MNDL3', ' - MUNDIAL S/A'],['MNPR3', ' - MINUPAR'],['MOAR3', ' - MONTEIRO ARANHA'],['MODL11', ' - MODALMAIS'],['MODL4', ' - MODALMAIS'],['MODL3', ' - MODALMAIS'],['MORC11', ' - MORE RECEBÍVEIS IMOBILIÁRIOS FII FUNDO DE INVESTIMENTO IMOBILIÁRIO'],['MORE11', ' - MORE REAL ESTATE FOF FII FUNDO DE INVESTIMENTO IMOBILIÁRIO'],['MOVI3 ', ' - MOVIDA'],['MRFG3', ' - Marfrig'],['MRSA6B', ' - MRS LOGÍSTICA S/A'],['MRSA3B', ' - MRS LOGÍSTICA S/A'],['MRSA5B', ' - MRS LOGÍSTICA S/A'],['MRVE3', ' - MRV'],['MSPA4', ' - MELHORAMENTOS'],['MTIG4', ' - IGUAÇU'],['MTRE3', ' - MITRE REALTY'],['MTSA4', ' - METISA'],['MULT3', ' - Multiplan'],['MWET4', ' - WETZEL S.A.'],['MWET3', ' - WETZEL S.A.'],['MXRF11', ' - MAXI RENDA FUNDO DE INVESTIMENTO IMOBILIARIO - FII'],['MYPK3', ' - IOCHPE-MAXION'],['NAVT11', ' - NAVI IMOBILIÁRIO TOTAL RETURN FUNDO DE INVESTIMENTO IMOBILIÁRIO'],['NCHB11', ' - FUNDO DE INVESTIMENTO IMOBILIÁRIO - FII NCH BRASIL RECEBÍVEIS IMOBILIÁRIOS'],['NCRA11', ' - NCH EQI RECEBÍVEIS DO AGRONEGÓCIO- FIAGRO IMOBILIÁRIO'],['NEOE3', ' - NEOENERGIA'],['NEWL11', ' - NEWPORT LOGÍSTICA FUNDO DE INVESTIMENTO IMOBILIÁRIO'],['NEWU11', ' - NEWPORT RENDA URBANA FUNDO DE INVESTIMENTO IMOBILIÁRIO - FII'],['NEXP3', ' - NEXPE'],['NGRD3', ' - NEOGRID'],['NINJ3', ' - GETNINJAS'],['NORD3', ' - NORDON INDS METALURGICAS SA'],['NPAR11', ' - FII - FUNDO DE INVESTIMENTO IMOBILIÁRIO NESTPAR'],['NSLU11', ' - FII HOSPITAL NOSSA SENHORA DE LOURDES'],['NTCO3', ' - GRUPO NATURA'],['NUTR3', ' - NUTRIPLANT'],['NVHO11', ' - FUNDO DE INVESTIMENTO IMOBILIARIO - FII NOVO HORIZONTE'],['ODPV3', ' - ODONTOPREV'],['OFSA3', ' - OUROFINO S/A'],['OIAG11', ' - OURINVEST INNOVATION - FIAGRO IMOBILIÁRIO'],['OIBR3', ' - OI'],['OIBR4', ' - OI'],['ONCO3', ' - ONCOCLINICAS'],['ONEF11', ' - FUNDO DE INVESTIMENTO IMOBILIÁRIO THE ONE'],['OPCT3', ' - OCEANPACT'],['ORPD11', ' - OURO VERDE DESENVOLVIMENTO IMOBILIÁRIO I FUNDO DE INVESTIMENTO IMOBILIÁRIO - FII'],['ORVR3', ' - ORIZON'],['OSXB3', ' - OSX BRASIL'],['OUFF11', ' - FUNDO DE INVESTIMENTO IMOBILIÁRIO - OURINVEST FUNDO DE FUNDOS'],['OUJP11', ' - OURINVEST JPP FUNDO DE INVESTIMENTO IMOBILIÁRIO- FII'],['OULG11', ' - FUNDO DE INVESTIMENTO IMOBILIÁRIO OURINVEST LOGÍSTICA'],['OURE11', ' - FUNDO DE INVESTIMENTO IMOBILIÁRIO OURINVEST RENDA ESTRUTURADA'],['PARD3', ' - IHPARDINI'],['PATC11', ' - PÁTRIA EDIFÍCIOS CORPORATIVOS FUNDO DE INVESTIMENTO IMOBILIÁRIO - FII'],['PATI4', ' - PANATLANTICA'],['PATI3', ' - PANATLANTICA'],['PATL11', ' - PÁTRIA LOGÍSTICA FUNDO DE INVESTIMENTO IMOBILIÁRIO'],['PCAR3', ' - PÃO DE AÇÚCAR'],['PDGR3', ' - PDG REALT'],['PDTC3', ' - PADTEC'],['PEAB4', ' - CIA. DE PARTICIPAÇÕES ALIANÇA DA BAHIA'],['PEAB3', ' - CIA. DE PARTICIPAÇÕES ALIANÇA DA BAHIA'],['PEMA11', ' - PERFORMA REAL ESTATE - FUNDO DE INVESTIMENTO IMOBILIÁRIO'],['PETR4', ' - PETROBRAS'],['PETR3', ' - PETROBRAS'],['PETZ3', ' - PETZ'],['PFRM3', ' - PROFARMA'],['PGMN3', ' - PAGUE MENOS'],['PINE4', ' - Pine'],['PLAS3', ' - PLASCAR PARTICIPAÇÕES INDUSTRIAIS S.A'],['PLCR11', ' - PLURAL RECEBÍVEIS IMOBILIÁRIOS FUNDO DE INVESTIMENTO IMOBILIÁRIO'],['PLOG11', ' - PLURAL LOGÍSTICA FUNDO DE INVESTIMENTO IMOBILIÁRIO'],['PLPL3', ' - PLANOEPLANO'],['PLRI11', ' - POLO FII - FII RECEBÍVEIS IMOBILIÁRIOS I'],['PMAM3', ' - PARANAPANEMA S.A.'],['PNVL3', ' - PANVEL FARMÁCIAS'],['POMO4', ' - MARCOPOLO'],['POMO3', ' - MARCOPOLO'],['PORD11', ' - POLO CRÉDITO IMOBILIÁRIO - FUNDO DE INVESTIMENTO IMOBILIÁRIO'],['PORT3', ' - WILSON SONS'],['POSI3', ' - POSITIVO INF'],['PQAG11', ' - PARQUE ANHANGUERA FUNDO DE INVESTIMENTO IMOBILIÁRIO'],['PQDP11', ' - FII PARQUE DOM PEDRO SHOPPING CENTER'],['PRIO3', ' - PETRORIO'],['PRNR3', ' - PRINER'],['PRSN11', ' - PERSONALE I FUNDO DE INVESTIMENTO IMOBILIÁRIO - FII'],['PRSV11', ' - PRESIDENTE VARGAS FUNDO DE INVESTIMENTO IMOBILIÁRIO'],['PSSA3', ' - PORTO SEGURO SA'],['PTBL3', ' - PORTOBELLO S/A'],['PTNT4', ' - PETTENATI'],['PTNT3', ' - PETTENATI'],['PURB11', ' - PLURAL RENDA URBANA FUNDO DE INVESTIMENTO IMOBILIÁRIO'],['PVBI11', ' - FUNDO DE INVESTIMENTO IMOBILIÁRIO - VBI PRIME PROPERTIES'],['QAGR11', ' - QUASAR AGRO - FUNDO DE INVESTIMENTO IMOBILIARIO'],['QAMI11', ' - QUASAR CRÉDITO IMOBILIÁRIO FUNDO DE INVESTIMENTO IMOBILIÁRIO'],['QIRI11', ' - QUATÁ IMOB RECEBÍVEIS IMOBILIÁRIOS - FUNDO DE INVESTIMENTO IMOBILIÁRIO'],['QUAL3', ' - QUALICORP'],['RADL3', ' - RAIADROGASIL'],['RAIL3', ' - RUMO S.A.'],['RAIZ4', ' - RAIZEN'],['RANI3', ' - CELULOSE IRANI'],['RAPT4', ' - RANDON S.A. IMPLEMENTOS E PARTICIPAÇÕES'],['RAPT3', ' - RANDON S.A. IMPLEMENTOS E PARTICIPAÇÕES'],['RBCO11', ' - RB CAPITAL OFFICE INCOME FUNDO DE INVESTIMENTO IMOBILIÁRIO'],['RBDS11', ' - RB CAPITAL DESENVOLVIMENTO RESIDENCIAL II FUNDO DE INVESTIMENTO IMOBILIARIO - FII'],['RBED11', ' - FUNDO DE INVESTIMENTO IMOBILIÁRIO RIO BRAVO RENDA EDUCACIONAL- FII'],['RBFF11', ' - RIO BRAVO FUNDO DE FUNDOS DE INVESTIMENTO IMOBILIÁRIO'],['RBHG11', ' - RIO BRAVO CRÉDITO IMOBILIÁRIO HIGH GRADE FUNDO DE INVESTIMENTO IMOBILIÁRIO - FII'],['RBHY11', ' - RIO BRAVO CRÉDITO IMOBILIÁRIO HIGH YIELD FUNDO DE INVESTIMENTO IMOBILIÁRIO - FII'],['RBLG11', ' - RB CAPITAL LOGÍSTICO FUNDO DE INVESTIMENTO IMOBILIÁRIO - FII'],['RBRD11', ' - RB CAPITAL RENDA II FUNDO DE INVESTIMENTO IMOBILIÁRIO - FII'],['RBRF11', ' - RBR ALPHA MULTIESTRATÉGIA REAL ESTATE FUNDO DE INVESTIMENTO IMOBILIÁRIO'],['RBRI11', ' - FUNDO DE INVESTIMENTO IMOBILIÁRIO - FII RBR DESENVOLVIMENTO III'],['RBRL11', ' - RBR LOG FUNDO DE INVESTIMENTO IMOBILIÁRIO'],['RBRP11', ' - FUNDO DE INVESTIMENTO IMOBILIARIO RBR PROPERTIES - FII'],['RBRR11', ' - FUNDO DE INVESTIMENTO IMOBILIARIO - FII RBR RENDIMENTO HIGH GRADE'],['RBRR12', ' - FUNDO DE INVESTIMENTO IMOBILIARIO - FII RBR RENDIMENTO HIGH GRADE'],['RBRS11', ' - Rio Bravo Renda Residencial Fundo de Investimento Imobiliario'],['RBRY11', ' - Fundo de Investimento Imobiliário RBR Crédito Imobiliário Estruturado'],['RBVA11', ' - FUNDO DE INVESTIMENTO IMOBILIÁRIO RIO BRAVO RENDA VAREJO - FII'],['RBVO11', ' - RIO BRAVO CRÉDITO IMOBILIÁRIO II FUNDO DE INVESTIMENTO IMOBILIÁRIO - FII'],['RCFF11', ' - RBR DESENVOLVIMENTO COMERCIAL FEEDER FOF FUNDO DE INVESTIMENTO IMOBILIÁRIO'],['RCRB11', ' - FUNDO DE INVESTIMENTO IMOBILIÁRIO RIO BRAVO RENDA CORPORATIVA'],['RCSL3', ' - RECRUSUL'],['RCSL4', ' - RECRUSUL'],['RDNI3', ' - RNI'],['RDOR3', ' - REDE D OR'],['RDPD11', ' - BB RENDA DE PAPÉIS IMOBILIÁRIOS II FUNDO DE INVESTIMENTO IMOBILIÁRIO - FII'],['RECR11', ' - FUNDO DE INVESTIMENTO IMOBILIÁRIO - FII REC RECEBÍVEIS IMOBILIÁRIOS'],['RECT11', ' - FUNDO DE INVESTIMENTO IMOBILIÁRIO - FII REC RENDA IMOBILIÁRIA'],['RECV3', ' - PETRORECONCA'],['RECX11', ' - FUNDO DE INVESTIMENTO IMOBILIÁRIO - REC FUNDO DE FUNDOS'],['REDE3', ' - REDE EMPRESAS DE ENERGIA ELÉTRICA S.A.'],['REIT11', ' - SINGULARE FUNDO DE INVESTIMENTO IMOBILIÁRIO'],['RELG11', ' - FUNDO DE INVESTIMENTO IMOBILIÁRIO REC LOGÍSTICA'],['RENT3', ' - LOCALIZA RENT A CAR'],['RFOF11', ' - FUNDO DE INVESTIMENTO IMOBILIÁRIO RB CAPITAL I FUNDO DE FUNDOS'],['RMAI11', ' - REAG MULTI ATIVOS IMOBILIÁRIOS - FUNDO DE INVESTIMENTO IMOBILIÁRIO'],['RNDP11', ' - BB RENDA DE PAPÉIS IMOBILIÁRIOS FUNDO DE INVESTIMENTO IMOBILIÁRIO - FII'],['RNEW4', ' - RENOVA'],['RNEW3', ' - RENOVA'],['RNEW11', ' - RENOVA'],['RNGO11', ' - FUNDO DE INVESTIMENTO IMOBILIÁRIO RIO NEGRO - FII'],['ROMI3', ' - ROMI'],['ROOF11', ' - FUNDO DE INVESTIMENTO IMOBILIÁRIO ROOFTOP I'],['RPAD3', ' - ALFA HOLDINGS'],['RPAD5', ' - ALFA HOLDINGS'],['RPAD6', ' - ALFA HOLDINGS'],['RPMG3', ' - REFINARIA DE PETRÓLEOS DE MANGUINHOS S.A'],['RRCI11', ' - RB CAPITAL RECEBÍVEIS IMOBILIÁRIOS FUNDO DE INVESTIMENTO IMOBILIÁRIO - FII'],['RRRP3', ' - 3R PETROLEUM'],['RSID3', ' - ROSSI RESIDENCIAL'],['RSPD11', ' - RB CAPITAL DESENVOLVIMENTO RESIDENCIAL III FUNDO DE INVESTIMENTO IMOBILIÁRIO - FII'],['RSUL4', ' - METALURGICA RIOSULENSE S/A'],['RURA11', ' - ITAÚ ASSET RURAL FIAGRO - IMOBILIÁRIO'],['RVBI11', ' - VBI REITS FOF - FUNDO DE INVESTIMENTO IMOBILIÁRIO'],['RZAG11', ' - FUNDO DE INVESTIMENTO NAS CADEIAS PRODUTIVAS AGROINDUSTRIAIS RIZA AGRO - FIAGRO - IMOBILIÁRIO'],['RZAK11', ' - RIZA AKIN FUNDO DE INVESTIMENTO IMOBILIÁRIO - FII'],['RZTR11', ' - FUNDO DE INVESTIMENTO IMOBILIÁRIO RIZA TERRAX'],['SADI11', ' - SANTANDER PAPÉIS IMOBILIÁRIOS CDI FUNDO DE INVESTIMENTO IMOBILIÁRIO'],['SAIC11', ' - FUNDO DE INVESTIMENTO IMOBILIARIO - FII SIA CORPORATE'],['SANB11', ' - SANTANDER'],['SANB4', ' - SANTANDER'],['SANB3', ' - SANTANDER'],['SAPR11', ' - SANEPAR'],['SAPR4', ' - SANEPAR'],['SAPR3', ' - SANEPAR'],['SARE11', ' - SANTANDER RENDA DE ALUGUÉIS FUNDO DE INVESTIMENTO IMOBILIÁRIO- FII'],['SBFG3', ' - GRUPO SBF'],['SBSP3', ' - SABESP'],['SCAR3', ' - SÃO CARLOS EMPREEND.E PARTICIPAÇÕES S.A.'],['SCPF11', ' - SCP FII'],['SDIL11', ' - FUNDO DE INVESTIMENTO IMOBILIARIO SDI RIO BRAVO RENDA LOGÍSTICA - FII'],['SEED11', ' - HEDGE SEED FUNDO DE INVESTIMENTO IMOBILIARIO'],['SEER3', ' - SER EDUCA'],['SEQL3', ' - SEQUOIA LOG'],['SEQR11', ' - SEQUÓIA III RENDA IMOBILIÁRIA FUNDO DE INVESTIMENTO IMOBILIÁRIO'],['SGPS3', ' - Springs'],['SHOW3', ' - TIME FOR FUN'],['SHPH11', ' - FUNDO DE INVESTIMENTO IMOBILIÁRIO SHOPPING PÁTIO HIGIENOPOLIS'],['SHUL4', ' - SCHULZ'],['SIMH3', ' - SIMPAR'],['SLCE3', ' - SLC Agricola'],['SLED4', ' - EDITORA SARAIVA'],['SLED3', ' - EDITORA SARAIVA'],['SMFT3', ' - SMART FIT'],['SMTO3', ' - SAO MARTINHO'],['SNCI11', ' - SUNO RECEBÍVEIS IMOBILIÁRIOS FUNDO DE INVESTIMENTO IMOBILIÁRIO'],['SNFF11', ' - SUNO FUNDO DE FUNDOS DE INVESTIMENTO IMOBILIÁRIO'],['SNSY5', ' - SANSUY S.A. INDÚSTRIA DE PLÁSTICOS'],['SOJA3', ' - BOA SAFRA'],['SOMA3', ' - GRUPO SOMA'],['SOND5', ' - SONDOTECNICA S/A.'],['SOND6', ' - SONDOTECNICA S/A.'],['SOND3', ' - SONDOTECNICA S/A.'],['SPTW11', ' - SP DOWNTOWN FUNDO DE INVESTIMENTO IMOBILIÁRIO - FII'],['SQIA3', ' - SINQIA'],['SRVD11', ' - SERRA VERDE FUNDO DE INVESTIMENTO IMOBILIÁRIO'],['STBP3', ' - SBPAR'],['SULA11', ' - Sul America'],['SULA4', ' - Sul America'],['SULA3', ' - Sul America'],['SUZB3', ' - Suzano Papel'],['SYNE3', ' - SYN PROP TEC'],['TAEE11', ' - TAESA'],['TAEE4', ' - TAESA'],['TAEE3', ' - TAESA'],['TASA4', ' - TAURUS ARMAS'],['TASA3', ' - TAURUS ARMAS'],['TCNO4', ' - TECNOSOLO S/A'],['TCNO3', ' - TECNOSOLO S/A'],['TCSA3', ' - TECNISA'],['TECN3', ' - TECHNOS'],['TEKA4', ' - TEKA S.A.'],['TELB4', ' - TELEBRAS'],['TELB3', ' - TELEBRAS'],['TEND3', ' - Tenda'],['TEPP11', ' - TELLUS PROPERTIES FUNDO DE INVESTIMENTO IMOBILIÁRIO'],['TFCO4', ' - TRACK FIELD'],['TGAR11', ' - FUNDO DE INVESTIMENTO IMOBILIÁRIO TG ATIVO REAL'],['TGMA3', ' - Tegma'],['TIMS3', ' - TIM'],['TKNO4', ' - TEKNO'],['TORD11', ' - TORDESILHAS EI FUNDO DE INVESTIMENTO IMOBILIÁRIO'],['TOTS3', ' - TOTVS'],['TPIS3', ' - TRIUNFO PARTICIPACOES SA'],['TRAD3', ' - TC'],['TRIS3', ' - Trisul'],['TRNT11', ' - FUNDO DE INVESTIMENTO IMOBILIÁRIO - FII TORRE NORTE'],['TRPL4', ' - TRANSMISSÃO PAULISTA'],['TRPL3', ' - TRANSMISSÃO PAULISTA'],['TRXB11', ' - TRX REAL ESTATE II FUNDO DE INVESTIMENTO IMOBILIÁRIO - FII'],['TRXF11', ' - TRX REAL ESTATE FUNDO DE INVESTIMENTO IMOBILIÁRIO - FII'],['TSER11', ' - TISHMAN SPEYER RENDA CORPORATIVA FUNDO DE INVESTIMENTO IMOBILIÁRIO'],['TTEN3', ' - 3TENTOS'],['TUPY3', ' - TUPY'],['TXRX4', ' - RENAUX'],['TXRX3', ' - RENAUX'],['UCAS3', ' - UNICASA'],['UGPA3', ' - ULTRAPAR PARTICIPAÇÕES SA'],['UNIP6', ' - UNIPAR PARTICIPAÇÕES S.A.'],['UNIP3', ' - UNIPAR PARTICIPAÇÕES S.A.'],['UNIP5', ' - UNIPAR PARTICIPAÇÕES S.A.'],['URPR11', ' - URCA PRIME RENDA FUNDO DE INVESTIMENTO IMOBILIÁRIO - FII'],['USIM5', ' - USIMINAS'],['USIM3', ' - USIMINAS'],['USIM6', ' - USIMINAS'],['VALE3', ' - VALE'],['VAMO3', ' - VAMOS'],['VBBR3', ' - VIBRA'],['VCJR11', ' - VECTIS JUROS REAL FUNDO DE INVESTIMENTO IMOBILIÁRIO - FII'],['VCRI11', ' - VINCI CREDIT SECURITIES FUNDO DE INVESTIMENTO IMOBILIARIO'],['VCRR11', ' - VECTIS RENDA RESIDENCIAL FUNDO DE INVESTIMENTO IMOBILIARIO'],['VGHF11', ' - VALORA HEDGE FUND FUNDO DE INVESTIMENTO IMOBILIÁRIO - FII'],['VGIA11', ' - VALORA CRA FUNDO DE INVESTIMENTO NAS CADEIAS PRODUTIVAS AGROINDUSTRIAIS - FIAGRO-IMOBILIÁRIO'],['VGIP11', ' - VALORA CRI ÍNDICE DE PREÇO FUNDO DE INVESTIMENTO IMOBILIÁRIO - FII'],['VGIR11', ' - VALORA CRI CDI FUNDO DE INVESTIMENTO IMOBILIARIO - FII'],['VIFI11', ' - VINCI INSTRUMENTOS FINANCEIROS FUNDO DE INVESTIMENTO IMOBILIÁRIO - FII'],['VIIA3', ' - VIA'],['VILG11', ' - VINCI LOGÍSTICA FUNDO DE INVESTIMENTO IMOBILIÁRIO - FII'],['VINO11', ' - VINCI OFFICES FUNDO DE INVESTIMENTO IMOBILIÁRIO'],['VISC11', ' - VINCI SHOPPING CENTERS FUNDO DE INVESTIMENTO IMOBILIÁRIO - FII'],['VITT3', ' - VITTIA'],['VIUR11', ' - VINCI IMOVEIS URBANOS FUNDO DE INVESTIMENTO IMOBILIARIO'],['VIVA3', ' - VIVARA S.A.'],['VIVR3', ' - VIVER'],['VIVT3', ' - TELEF BRASIL'],['VLID3', ' - VALID'],['VLOL11', ' - FUNDO DE INVESTIMENTO IMOBILIARIO - FII VILA OLIMPIA CORPORATE'],['VOTS11', ' - Votorantim Securities Master Fundo de Investimento Imobiliário - FII'],['VRTA11', ' - FATOR VERITA FUNDO DE INVESTIMENTO IMOBILIARIO'],['VSEC11', ' - FUNDO DE INVESTIMENTO IMOBILIÁRIO VOTORANTIM SECURITIES'],['VSHO11', ' - FUNDO DE INVESTIMENTO IMOBILIÁRIO VOTORANTIM SHOPPING'],['VSLH11', ' - VERSALHES RECEBÍVEIS IMOBILIÁRIOS - FUNDO DE INVESTIMENTO IMOBILIÁRIO'],['VTLT11', ' - FUNDO DE INVESTIMENTO IMOBILIÁRIO VOTORANTIM LOGÍSTICA'],['VULC3', ' - VULCABRAS S/A.'],['VVEO3', ' - VIVEO'],['VVPR11', ' - Fundo de Investimento Imobiliário - V2 Properties'],['VXXV11', ' - GENESIS MULTIESTRATÉGIA FUNDO DE INVESTIMENTO IMOBILIÁRIO - FII'],['WEGE3', ' - WEG SA'],['WEST3', ' - WESTWING'],['WHRL4', ' - WHIRLPOOL S.A.'],['WHRL3', ' - WHIRLPOOL S.A.'],['WIZS3', ' - WIZ S.A.'],['WLMM4', ' - WLM'],['WLMM3', ' - WLM'],['WPLZ11', ' - SHOPPING WEST PLAZA FUNDO DE INVESTIMENTO IMOBILIARIO'],['WTSP11', ' - FUNDO DE INVESTIMENTO IMOBILIÁRIO OURINVEST RE I'],['XPCA11', ' - XP CRÉDITO AGRÍCOLA-FUNDO DE INVESTIMENTO NAS CADEIAS PRODUTIVAS AGROINDUSTRIAIS IMOB.-FIAGRO-IMOB.'],['XPCI11', ' - XP CRÉDITO IMOBILIÁRIO - FUNDO DE INVESTIMENTO IMOBILIÁRIO'],['XPCM11', ' - XP CORPORATE MACAÉ FUNDO DE INVESTIMENTO IMOBILIÁRIO - FII'],['XPHT11', ' - XP HOTÉIS - FUNDO DE INVESTIMENTO IMOBILIÁRIO - FII'],['XPHT12', ' - XP HOTÉIS - FUNDO DE INVESTIMENTO IMOBILIÁRIO - FII'],['XPIN11', ' - XP Industrial Fundo de Investimento Imobiliário'],['XPLG11', ' - XP Log Fundo de Investimento Imobiliário - FII'],['XPML11', ' - XP MALLS FUNDO DE INVESTIMENTO IMOBILIÁRIO FII'],['XPPR11', ' - XP PROPERTIES FUNDO DE INVESTIMENTO IMOBILIÁRIO - FII'],['XPSF11', ' - XP SELECTION FUNDO DE FUNDOS DE INVESTIMENTO IMOBILIÁRIO - FII'],['XTED11', ' - TRX EDIFICIOS CORPORATIVOS FUNDO DE INVESTIMENTO IMOBILIARIO - FII'],['YDUQ3', ' - YDUQS PART'],['YUFI11', ' - YUCA FUNDO DE INVESTIMENTO IMOBILIÁRIO'],['ZIFI11', ' - ZION CAPITAL FUNDO DE INVESTIMENTO IMOBILIÁRIO - FII']]; 

}