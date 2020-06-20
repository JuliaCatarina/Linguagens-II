import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  status : boolean = false;
  alunos = [];
  mudarBotao(){
    this.status = !this.status;
  }
  salvaForm(aluno){
    this.alunos.push(aluno);
    console.log(this.alunos);
  }
}
