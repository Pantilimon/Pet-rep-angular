import { Component, inject, Input, input } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter } from '@angular/material-moment-adapter';
import {MatButtonModule} from '@angular/material/button';
import { MatMomentDateModule, MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';
import { MAT_DATE_FORMATS } from '@angular/material/core';

@Component({
  selector: 'arm-lnp-daterange',
  standalone: true,
  imports: [
    MatDatepickerModule,
    MatMomentDateModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatButtonModule
  ],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } },
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {
      appearance: 'outline',
      floatLabel: 'always'
    }},
    { provide: NG_VALUE_ACCESSOR,
      useExisting: DateRangeComponent,
      multi: true
    },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },

  ],
  templateUrl: './daterange.component.html',
  styleUrl: './daterange.component.scss'
})
export class DateRangeComponent implements ControlValueAccessor {
  private fb = inject(FormBuilder);
  // min = input();
  // max = input();
  labelFrom = input('От');
  labelTo = input('До');

  public value = {min: this.min, max: this.max};
  public Value = {};
  @Input() min?: object;
  @Input() max?: object;
  public touched = false;
  private onChange = (value: any) => {};
  private onTouched = () => {};

  //test
  public thisValue(): void {
    console.log(this.value);
  };
  public thisMin(): void {
    console.log(this.min);
  };
  public thisMax(): void {
    console.log(this.max);
  };
  //testy
  

  form: FormGroup = this.fb.group({
    from: [this.min, Validators.required],
    to: [this.max, Validators.required]
  });

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  writeValue(value: any): void {
      if (value) {
        this.form.setValue(value, { emitEvent: false });
      }
  }
  
  updateMin(insideValue: object) {
    this.onChange(insideValue);
    this.onTouched();
  }
  updateMax(insideValue: object) {
    this.value.max = insideValue;
    this.onChange(insideValue);
    this.onTouched();
  }
  // updateValue(insideValue: object) {
  //   this.Value = insideValue;
  //   this.onChange(insideValue);
  //   this.onTouched();
  // }
}
