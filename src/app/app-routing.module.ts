import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';


const routes: Routes = [
   {path:'',component:HomeComponent},
  {path:'article/:id',component:ArticleDetailsComponent},
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
