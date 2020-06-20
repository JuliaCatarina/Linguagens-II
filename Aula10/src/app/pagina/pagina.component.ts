import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {
  constructor() {
   }

  ngOnInit(): void {
  }
  x: string = 'Se você é Mauá, CLIQUE AQUI';
  changeText(){
      this.x = '#CHUPAfei';
  }
}
