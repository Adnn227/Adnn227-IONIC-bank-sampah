import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router, public toastController: ToastController) { 
    if(!(localStorage.getItem("username") === null)){
      this.router.navigate(['home']);
    }
  }

  ngOnInit() {
  }

  username: string = "";
  password: string = "";
  

  async login(){
    if(this.username == "user123", "adnan"){
      if(this.password == "pass"){
        this.router.navigate(['home']);
        localStorage.setItem("username", this.username);
      }else{
        const toast = await this.toastController.create({
          message: `Password salah`,
          duration: 3000,
          position: "bottom",
        });
        toast.present();
      }
    }else{
      const toast = await this.toastController.create({
        message: `Username salah`,
        duration: 3000,
        position: "bottom",
      });
      toast.present();
    }
    
  }

}
