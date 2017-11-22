import { QuizService } from '../quiz.service';
import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

   
  constructor(private QuizService:QuizService, private route: ActivatedRoute,private router:Router) { }

  ngOnInit() {
    
  }

}
