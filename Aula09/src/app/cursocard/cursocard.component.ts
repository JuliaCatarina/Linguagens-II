import { Component, OnInit,Input } from '@angular/core';


@Component({
  selector: 'app-cursocard',
  templateUrl: './cursocard.component.html',
  styleUrls: ['./cursocard.component.css']
})
export class CursocardComponent implements OnInit {
  @Input() curso;
  constructor() { }

  ngOnInit(): void {
  }
  
}
