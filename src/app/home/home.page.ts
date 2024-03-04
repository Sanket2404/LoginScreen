import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent,IonInput,IonCard,IonItem,IonButton,IonIcon,IonText,IonImg } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,IonInput,IonCard,
    IonItem,ReactiveFormsModule,IonButton,IonIcon,IonText,IonImg],
})
export class HomePage {
  form! : FormGroup;
  isPwd :boolean = false;
  constructor() {
    this.initFrom();
  }

  initFrom(){
    this.form  = new FormGroup({
      email : new FormControl('',[Validators.required,Validators.email]),
      password : new FormControl('',[Validators.required,Validators.minLength(8)])
    });
  }

  togglePassword(){
     this.isPwd = !this.isPwd;
  }

  submitForm(){
   if(this.form.invalid){
    this.form.markAllAsTouched();
    return;
   }
   this.form.reset();
   console.log(this.form.value);
  }

}
