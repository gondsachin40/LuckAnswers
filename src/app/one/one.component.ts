import { Component ,Output ,Input, OnInit} from '@angular/core';
import { EventEmitter } from '@angular/core';
import { argsOrArgArray } from 'rxjs/internal/util/argsOrArgArray';
@Component({
  selector: 'app-one',
  imports: [],
  templateUrl: './one.component.html',
  styleUrl: './one.component.css'
})
export class OneComponent implements OnInit{

 @Input() appValues:any;
 @Output() next = new EventEmitter<any>();
 @Output() hasErrors = new EventEmitter<any>();

 onAddQuestion(question : string) : void{

  console.log(question);
  const appValuesCopy = this.appValues;
  console.log(appValuesCopy.question);
  if(question !== ''){
    appValuesCopy.visiblePanel = 'two';
    appValuesCopy.question = question;
    this.next.emit(appValuesCopy);
  }else{
    this.hasErrors.emit({
      show : true, 
      message : 'Sorry, you need to enter something'
    });
  }
 }
  ngOnInit(): void {
    // console.log(this.ans);
 }
}
