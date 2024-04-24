import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuildingPageComponent } from './building-page/building-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SimpleAnalisysComponent } from './simple-analisys/simple-analisys.component';

const routes: Routes = [
  { path: 'home', component: SimpleAnalisysComponent },
  { path: 'simple-analysis', component: SimpleAnalisysComponent },
  { path: 'custom-analysis', component: BuildingPageComponent },
  { path: 'quiz', component: BuildingPageComponent },
  { path: 'buiding-page', component: BuildingPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
