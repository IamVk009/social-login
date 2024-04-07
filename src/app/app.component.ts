import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { ApiCallService } from './services/api-call.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  constructor(private authService: SocialAuthService,
    private apiCall: ApiCallService
  ) {
    
  }

  ngOnInit(): void {
    this.authService.authState.subscribe({
      next:(user) => {
        alert('User Logged In Successfully');
        console.log(user);
        this.apiCall.loginWithGoogle(user).subscribe({
          next:(data)=> {
            console.log("Data from Backend");
            console.log(data);
          },

          error:(error) => {
            console.log("Error from Backend");
            console.log(error);
          },
        })
      },

      error:(error) => {
        alert('Login Error');
        console.log(error);
      },

      complete:() => {
        alert('Request Completed..!!');
      }
    })
  }  
  title = 'social-login';
}
