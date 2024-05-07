import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-estudante',
  templateUrl: './cadastro-estudante.page.html',
  styleUrls: ['./cadastro-estudante.page.scss'],
})
export class CadastroEstudantePage implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("component student register")
  }

}
