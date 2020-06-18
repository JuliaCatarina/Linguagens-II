import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-addcurso',
  templateUrl: './addcurso.component.html',
  styleUrls: ['./addcurso.component.css']
})
export class AddcursoComponent implements OnInit {
  @Output() cadastroCurso= new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  cadastro(n,d){
  const curso = {nome:n,
    descritivo:d
};
console.log(curso);
this.cadastroCurso.emit(curso);

}
}

