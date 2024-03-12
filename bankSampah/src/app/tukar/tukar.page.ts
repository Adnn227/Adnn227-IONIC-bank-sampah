import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SaldoService, Stor } from '../services/homepage/saldo.service';

@Component({
  selector: 'app-tukar',
  templateUrl: './tukar.page.html',
  styleUrls: ['./tukar.page.scss'],
})
export class TukarPage implements OnInit {
  stor: Stor = new Stor();
  saldo: number = 0;

  constructor(private router: Router, private saldoService: SaldoService) {
    if((localStorage.getItem("username") === null)){
      this.router.navigate(['login']);
    }
  }


  createStor() {
    console.log('Data yang dikirim:', this.stor);
    this.saldoService.createStor(this.stor).subscribe(
      (response) => {
        console.log('Stor created successfully', response);
        // Reset the form or navigate to another page if needed
        this.stor = new Stor();
      },
      (error) => {
        console.error('Error creating stor', error);
        // Handle error, show stor-friendly message, etc.
      }
    );
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
