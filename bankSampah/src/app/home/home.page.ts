import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SaldoService } from '../services/homepage/saldo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  saldo: number = 0;

  constructor(private router: Router, private saldoService: SaldoService) {
    if((localStorage.getItem("username") === null)){
      this.router.navigate(['login']);
    }
  }

  doRefresh(event: any) {
    console.log('Refreshing...');
    setTimeout(() => {
      console.log('Refresh complete');
      event.target.complete();
    }, 2000); 
  }

  ngOnInit() {
    this.loadSaldo();
  }
  
  loadSaldo() {
    this.saldoService.getSaldo().subscribe(
      (data: any) => {
        this.saldo = data.saldo;
      },
      error => {
        console.error(error);
      }
    );
  }

  logout(){
    localStorage.removeItem("username");
    this.router.navigate(['login']);
  }

}
