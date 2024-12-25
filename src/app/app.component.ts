import { Component , OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import answersValue from './utils/answers.json';
import { OneComponent } from "./one/one.component";
import { TwoComponent } from "./two/two.component";
import { ThreeComponent } from "./three/three.component";
import { CommonModule } from '@angular/common';
export interface Errors {
  show : boolean;
  message : string;
}
export interface AppValues {
  visiblePanel: string;
  question: string;
  mode: boolean;
  answers: string[];
  custom: string[];
  answer: string | null | undefined;
}
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, OneComponent, TwoComponent, ThreeComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  appValues: AppValues = {
    visiblePanel: 'one',
    question: '',
    mode: false,
    answers: answersValue.answers,
    custom: [],
    answer: null
  };
  errors : Errors = {
    show : false,
    message : 'string'
  };
  handleNext(values: AppValues) : void{
    console.log(this.appValues);
    this.appValues = values;
  }
  handleErrors(values: Errors){
    const errorcopy = values;
    this.errors = {
      show : values.show,
      message : values.message
    };
    setTimeout(() => {
      this.errors.show = false;
    }, 2000);
  }
  ngOnInit(): void {
    console.log(answersValue.answers);
  }
}
