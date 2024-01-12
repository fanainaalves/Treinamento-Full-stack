import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DadosService } from './dados.service';

declare var google: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private dados: any;
  constructor(private dadosService: DadosService) { }

  ngOnInit(): void {
    this.dadosService.obterDados().subscribe(dados => {
      this.dados = dados;
      this.init();
    })
  }

  init(): void{
    if(typeof(google) !== 'undefined'){
      google.charts.load('current', {'packages':['corechart']});
      setTimeout(() => {
        google.charts.setOnLoadCallback(this.exibirGraficos())
      }, 1000);
    }
  }

  exibirGraficos(): void{
    this.exibirPieChart();
    this.exibir3dPieChart();
    this.exibirBarChart();
    this.exibirLineChart();
    this.exibirColumnChart();
    this.exibirDonutChart();
  }

  exibirPieChart(): void{
    const el = document.getElementById('pie_chart');
    const chart = new google.visualization.PieChart(el);
    chart.draw(this.obterDataTable(), this.obterOpcoes());
  }

  exibir3dPieChart(): void{
    const el = document.getElementById('3d_pie_chart');
    const chart = new google.visualization.PieChart(el);
    const opcoes = this.obterOpcoes()

    opcoes['is3D'] = true;
    chart.draw(this.obterDataTable(), opcoes);
  }

  exibirLineChart(): void{
    const el = document.getElementById('liine_chart');
    const chart = new google.visualization.LineChart(el);
    chart.draw(this.obterDataTable(), this.obterOpcoes());
  }

  exibirBarChart(): void{
    const el = document.getElementById('bar_chart');
    const chart = new google.visualization.BarChart(el);
    chart.draw(this.obterDataTable(), this.obterOpcoes());
  }

  exibirColumnChart(): void{
    const el = document.getElementById('column_chart');
    const chart = new google.visualization.ColumnChart(el);
    chart.draw(this.obterDataTable(), this.obterOpcoes());
  }

  exibirDonutChart(): void{
    const el = document.getElementById('donut_chart');
    const chart = new google.visualization.PieChart(el);
    const opcoes = this.obterOpcoes();

    opcoes['pieHole'] = 0.4;
    chart.draw(this.obterDataTable(), opcoes);
  }

  obterDataTable(): any{
    const data = new google.visualization.DataTable();
    data.addColumn('string', 'Mês');
    data.addColumn('number', 'Quantidade');
    data.addRows(this.dados);;
    return data;
  }

  obterOpcoes(): any{
    return{
      'title': 'Quantidade de cadastros primeiro semestre',
      'width': 400,
      'height': 300
    };
  }
}
