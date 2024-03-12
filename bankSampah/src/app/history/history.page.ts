import { Component, OnInit } from '@angular/core';
import { SaldoService } from '../services/homepage/saldo.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  constructor(private saldoService: SaldoService) { }

  history: any[] = [];


  ngOnInit() {
    this.History();
  }

  History() {
    this.saldoService.getHistory().subscribe(
      (data: any) => {
        this.history = data.history;
      },
      error => {
        console.error(error);
      }
    );
  }

}
