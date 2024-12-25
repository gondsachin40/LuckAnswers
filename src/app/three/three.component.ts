import { Component , Input ,Output, OnInit , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-three',
  imports: [],
  templateUrl: './three.component.html',
  styleUrl: './three.component.css'
})
export class ThreeComponent implements OnInit{
 @Input() appValues: any;
  ngOnInit(): void {
   console.log(this.appValues);
 }
}
