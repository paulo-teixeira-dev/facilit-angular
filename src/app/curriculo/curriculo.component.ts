import { Component, OnInit } from '@angular/core';
import { CIDADE } from '../mock-cidade';
import { Curriculo } from '../curriculo';

@Component({
  selector: 'app-curriculo',
  templateUrl: './curriculo.component.html',
  styleUrls: ['./curriculo.component.css']
})
export class CurriculoComponent implements OnInit {

  cidades = CIDADE;
  curriculo: Curriculo;

  constructor() {}

  ngOnInit() {
    this.curriculo = new Curriculo();
  }

  onSubmit(curriculo: Curriculo): void{
    console.log(curriculo);
  }

}
