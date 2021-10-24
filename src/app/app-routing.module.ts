import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataprotectionComponent } from './dataprotection/dataprotection.component';
import { HomeComponent } from './home/home.component';
import { ImprintComponent } from './imprint/imprint.component';

const routes: Routes = [
  { path: 'imprint', component: ImprintComponent},
  { path: '', component: HomeComponent},
  { path: 'dataprotection', component: DataprotectionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
