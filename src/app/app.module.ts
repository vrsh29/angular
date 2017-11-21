import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuizAppComponent } from './quiz-app/quiz-app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { QuizPageComponent } from './quiz-page/quiz-page.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizAppComponent,
    HomePageComponent,
    QuizPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
