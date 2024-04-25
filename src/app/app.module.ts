import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { CustomAnalysisComponent } from './custom-analysis/custom-analysis.component';
import { QuizComponent } from './quiz/quiz.component';
import { BuildingPageComponent } from './building-page/building-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SimpleAnalisysComponent } from './simple-analisys/simple-analisys.component';
import { EmoticonHappyComponent } from './emoticon-happy/emoticon-happy.component';
import { EmoticonUnhappyComponent } from './emoticon-unhappy/emoticon-unhappy.component';
import { EstimateFieldsetLegendComponent } from './estimate-fieldset-legend/estimate-fieldset-legend.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SimpleAnalisysComponent,
    MenuComponent,
    HomeComponent,
    CustomAnalysisComponent,
    QuizComponent,
    BuildingPageComponent,
    PageNotFoundComponent,
    EmoticonHappyComponent,
    EmoticonUnhappyComponent,
    EstimateFieldsetLegendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
