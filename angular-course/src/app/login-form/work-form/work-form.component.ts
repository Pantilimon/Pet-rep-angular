import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormGroupDirective, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { catchError, take, throwError } from 'rxjs';
import { ErrorStateMatcher } from '@angular/material/core';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null,
    form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control?.dirty && control.invalid || (isSubmitted && form.touched))
  }
}

const MATERIAL_MODULES = [
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule
];
@Component({
  selector: 'login-form',
  standalone: true,
  imports: [    
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ...MATERIAL_MODULES
  ],
  templateUrl: './work-form.component.html',
  styleUrl: './work-form.component.scss'
})
export class WorkFormComponent {
  public loginForm = new FormGroup({
    login: new FormControl<string>('', Validators.required),
    password: new FormControl<string>('', Validators.required)
  });

  public isPasswordHidden = signal(true);
  public matcher = new MyErrorStateMatcher()
  public loginerror = false

  authFacade: any;

  public hidePass(): void {
    this.isPasswordHidden.update((state) => !state);
  }


  public handleError1(): void {
    const { login, password } = this.loginForm.getRawValue();
    if (login == 'test' && password == 'test') {
        alert('Успешный вход!');
    } else {
        alert('error');
        this.loginerror = !this.loginerror
    }
}

}
