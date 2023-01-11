import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Tarefa, TarefaService } from '../shared';

@Component({
  selector: 'app-cadastrar-tarefa',
  templateUrl: './cadastrar-tarefa.component.html',
  styleUrls: ['./cadastrar-tarefa.component.css']
})
export class CadastrarTarefaComponent implements OnInit {

  @ViewChild('formTarefa', { static: true }) formTarefa: NgForm;
  tarefa: Tarefa;

  constructor(
    private tarefaService: TarefaService,
    private router: Router
  ) {}

  ngOnInit(){
    this.tarefa = new Tarefa();
  }


  /*
  "this.formTarefa.form.valid" valida se, conforme determinado no html, há no mínimo os 5 caracteres
  cadastra a tarefa,
  ".router.navigate" navega até a url 'tarefas', nesse caso a tela onInit.  
  */
  cadastrar(): void {
    if(this.formTarefa.form.valid) {
      this.tarefaService.cadastrar(this.tarefa);
      this.router.navigate(['tarefas'])
    }
  }
}
