import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel }  from '../shared/models/login.model';
import { Registration } from '../shared/models/registration.model';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    login:LoginModel=new LoginModel();
    registration:Registration=new Registration();

    currentTab:string='login';

    username:string;
    password:string;

    fullName:string;
    country:string;
    regPassword:string;
    repeatPassword:string;

    constructor(private router: Router) {}

    ngOnInit() {}
    activate(tabName:string){
        this.currentTab=tabName;
       
    }
    onLogin() {
       
         this.login.userName=this.username;
         this.login.password=this.password;
         console.log(this.login.userName,this.login.password);


                localStorage.setItem('isLoggedin', 'true');
        this.router.navigate(['/dashboard']);
        
    }

    onRegistration(){
        this.registration.fullName=this.fullName;
        this.registration.country=this.country;
        this.registration.password=this.regPassword;
        this.registration.repeatPassword=this.repeatPassword;
        console.log('Full Name:',this.registration.fullName,
                    'Country:',this.registration.country,
                     'Password',this.registration.password,
                     'ReapeatPasword',this.registration.repeatPassword
        );
        
    }
}
