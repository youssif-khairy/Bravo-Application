import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import {FormsModule ,ReactiveFormsModule} from '@angular/forms'
import { HttpClientModule  } from '@angular/common/http';
import {FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ArticleDetailsComponent } from './article-details/article-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    ArticleDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
