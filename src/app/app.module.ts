import { QuizService } from './quiz.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { QuestionsPageComponent } from './questions-page/questions-page.component';
import { ResultsPageComponent } from './results-page/results-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    QuestionsPageComponent,
    ResultsPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [QuizService],
  bootstrap: [AppComponent]
})
export class AppModule { }
