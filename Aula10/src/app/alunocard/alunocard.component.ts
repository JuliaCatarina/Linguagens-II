import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alunocard',
  templateUrl: './alunocard.component.html',
  styleUrls: ['./alunocard.component.css']
})
export class AlunocardComponent implements OnInit {
  @Input() aluno;
  constructor() { }

  ngOnInit(): void {
  }

}
