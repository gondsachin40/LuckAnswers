import { Component,Input,Output,EventEmitter,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import ans from '../utils/answers.json';
@Component({
  selector: 'app-two',
  imports: [CommonModule],
  templateUrl: './two.component.html',
  styleUrl: './two.component.css'
})
// const ye = ans.answers;
export class TwoComponent implements OnInit{
  @Input() appValues: any; 
  ye = ans.answers;
  sizeofar = this.ye.length;
  index = Math.floor(Math.random() * this.sizeofar);
  display = this.ye[this.index];
  ngOnInit(): void {
    
}
}
