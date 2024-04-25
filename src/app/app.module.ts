import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomAnalysisComponent } from './feature/custom-analysis/custom-analysis.component';
import { HomeComponent } from './feature/home/home.component';
import { QuizComponent } from './feature/quiz/quiz.component';
import { SimpleAnalisysComponent } from './feature/simple-analisys/simple-analisys.component';
import { BuildingPageComponent } from './shared/components/building-page/building-page.component';
import { EmoticonHappyComponent } from './shared/components/emoticon-happy/emoticon-happy.component';
import { EmoticonUnhappyComponent } from './shared/components/emoticon-unhappy/emoticon-unhappy.component';
import { EstimateFieldsetLegendComponent } from './shared/components/estimate-fieldset-legend/estimate-fieldset-legend.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';


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
