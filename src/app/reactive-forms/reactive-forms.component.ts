import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent {
  userForm: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder){
      this.userForm = this.formBuilder.group({
        name: ['Nombre completo', [Validators.required, Validators.minLength(3)]],
        //se puede hacer asi
        email: ['email@example.com', [Validators.required, Validators.email]],
        dni: ['', [Validators.required, Validators.minLength(6)]],
      })
    }
    
//Entiendo que aqui estoy rompiendo la regla de "DRYS" 
//asi que debo buscar la manera de hacer una funcion para esta parte del codigo
    get nameControl(){
      return this.userForm.controls['name']
    }

    get nameControlIsInvalid(){
      return this.nameControl.invalid;
    }

    get emailControl(){
      return this.userForm.controls['email']
    }

    get emailControlIsInvalid(){
      return this.emailControl.invalid && this.emailControl.touched;
    }

    get dniControl(){
      return this.userForm.controls['dni']
    }

    get dniControlIsInvalid(){
      return this.dniControl.invalid && this.dniControl.touched;
    }

    onSubmit(): void{
      console.log(this.userForm.valid);
      console.log(this.userForm.value);
    }
}
