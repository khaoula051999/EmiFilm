import { Component, OnInit } from '@angular/core';
import { User } from "../../models/user";
import { AuthService } from "../../services/auth.service";
import { Router } from '@angular/router';
import Cookies from 'js-cookie';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user;
  constructor(public authService: AuthService,private router: Router) { }

  ngOnInit(): void {
  }

  signup(email, password, cpassword) {
    if (password == cpassword) {
      this.user = new User(1, email, password)
      this.authService.signup(this.user).subscribe(data => {
        console.log(data);
        Cookies.set("isAuth",true)
        Cookies.set("email",email)
        this.router.navigate(['/']);
      })
    } else {
      alert("err")
    }
  }
}
