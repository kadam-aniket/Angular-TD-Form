import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'TD-Forms';
  defaultQuestion = 'pet';
   user={
    username: '',
    email: '',
    secretQuestion: ''
  };
  
  suggestUserName(){
    const suggestName = 'Superuser'
  }

  onSubmit(form : NgForm){
    this.user.username = form.value.username
    this.user.email = form.value.email
    this.user.secretQuestion = form.value.secret
    form.reset();
  }
}
