import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'myforms',
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})
export class FormsComponent {
  public myForm = new FormGroup(
    {
      login: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    }
  )
  onSubmit() {
    if (this.myForm.valid) {
      console.log(this.myForm.value); 
    }
    else {
      alert("Форма не валидна")
    }

  }
}
