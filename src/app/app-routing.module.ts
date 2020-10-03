import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MaterialModule } from '@app/material/material.module';

import { MatButtonModule } from '@angular/material/button';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ConnectComponent } from './components/connect/connect.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { SummaryComponent } from './components/summary/summary.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, data: { animation: 0 } },
  { path: 'portfolio', component: PortfolioComponent, data: { animation: 1 } },
  { path: 'about-me', component: AboutMeComponent, data: { animation: 2 } },
  { path: 'skills', component: SkillsComponent, data: { animation: 3 } },
  { path: 'summary', component: SummaryComponent, data: { animation: 4 } },
  { path: 'connect', component: ConnectComponent, data: { animation: 5 } },
];

@NgModule({
  declarations: [DashboardComponent, PortfolioComponent, SkillsComponent, ConnectComponent, AboutMeComponent, SummaryComponent],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule, RouterModule.forRoot(routes)],
  exports: [RouterModule, MaterialModule]

})
export class AppRoutingModule { }
