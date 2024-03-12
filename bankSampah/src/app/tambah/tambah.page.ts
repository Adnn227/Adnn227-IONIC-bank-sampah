import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User, SaldoService } from '../services/homepage/saldo.service';


@Component({
  selector: 'app-tambah',
  templateUrl: './tambah.page.html',
  styleUrls: ['./tambah.page.scss'],
})
export class TambahPage implements OnInit {

  user: User = new User();
  barang: number = 0;
  jumlah: number = 0;

  constructor(private router: Router, private http: HttpClient, private saldoService: SaldoService) { }

  ngOnInit() {
  }

  create() {
    console.log('Data yang dikirim:', this.user);
    this.saldoService.tambah(this.user).subscribe(
      (response) => {
        console.log('User created successfully', response);
        // Reset the form or navigate to another page if needed
        this.user = new User();
      },
      (error) => {
        console.error('Error creating user', error);
        // Handle error, show user-friendly message, etc.
      }
    );
  }
  
  logout(){
    localStorage.removeItem("username");
    this.router.navigate(['login']);
  }

}
