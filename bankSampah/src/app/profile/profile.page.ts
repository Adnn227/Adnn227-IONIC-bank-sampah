import { Component, OnInit } from '@angular/core';
import { SaldoService } from '../services/homepage/saldo.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  saldo: number = 0;
  username: string | null = localStorage.getItem("username");
  constructor(private router: Router, private saldoService: SaldoService) { }

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

  logout() {
    localStorage.removeItem("username");
    this.router.navigate(['login']);
  }

}
