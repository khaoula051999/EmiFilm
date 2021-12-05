import { Component, OnInit } from '@angular/core';
import { User } from "../../models/user";
import { AuthService } from "../../services/auth.service";
import { Router } from '@angular/router';
import Cookies from 'js-cookie';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  user;

  constructor(public authService: AuthService,private router: Router) { }

  ngOnInit(): void {
  }
  signin(email, password) {
    this.user = new User(1, email, password)
    this.authService.signin(this.user).subscribe(data=>{
      if(data.length>0){
        Cookies.set("isAuth",true)
        Cookies.set("email",email)
        this.router.navigate(['/']);
      }else{
        alert("Check your username/password")
      }
    })
  }

}
