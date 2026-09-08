import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'analisys-brazilian-stock-front';

  constructor(private translate: TranslateService) {
    translate.addLangs(['pt-BR', 'es', 'en']);
    translate.setDefaultLang('pt-BR');
  }

  ngOnInit(): void {
    const navLang = (navigator.language || (navigator as any).userLanguage || 'pt-BR').toLowerCase();
    if (navLang.startsWith('es')) {
      this.translate.use('es');
    } else if (navLang.startsWith('en')) {
      this.translate.use('en');
    } else {
      this.translate.use('pt-BR');
    }
  }
}
